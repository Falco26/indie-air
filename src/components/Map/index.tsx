import { useCallback, useMemo, useState } from "react"
import { Map as MapGL, Marker, Popup } from "react-map-gl"
import { StyledMapContainer } from "./styled"
import { useDispatch } from "react-redux"
import { AirportDto } from "../../API/types"
import { Text } from "../Text"
import { searchActions } from "../../features/search/reducer"

type Props = {
  airportMarkers: AirportDto[]
}

export const Map = ({ airportMarkers }: Props) => {
  const dispatch = useDispatch()
  const [popupInfo, setPopupInfo] = useState<AirportDto>()

  const handleOpenPopUp = useCallback(
    (e: any, airport: AirportDto) => {
      e?.originalEvent?.stopPropagation()
      setPopupInfo(airport)
    },
    [setPopupInfo]
  )

  const handleClick = useCallback(
    (city: string) => dispatch(searchActions.insertDepart(city)),
    [dispatch]
  )
  const pins = useMemo(
    () =>
      airportMarkers.map((airport, index) => {
        return (
          <Marker
            longitude={airport.lng}
            latitude={airport.lat}
            key={`marker-${index}`}
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleClick(airport.name)}
          >
            <img
              onMouseEnter={(e) => handleOpenPopUp(e, airport)}
              onMouseLeave={(e) => setPopupInfo(undefined)}
              src="https://icons.iconarchive.com/icons/martz90/circle-addon2/128/plane-flight-icon.png"
              style={{
                width: "35px",
                height: "35px",
              }}
              alt="marker icon"
            />
          </Marker>
        )
      }),
    [airportMarkers, handleClick, handleOpenPopUp]
  )

  return (
    <StyledMapContainer>
      <MapGL
        mapboxAccessToken="pk.eyJ1IjoiZmFsY28yNiIsImEiOiJjbGlicjR4YnowZ2J5M3JtdWFmNmpldmF0In0.JaA86mVemonpBrKtaMuFtA"
        initialViewState={{
          longitude: 12.49,
          latitude: 41.9,
          zoom: 5,
        }}
        style={{
          width: "100vw",
          height: "100vh",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pins}
        {popupInfo && (
          <Popup
            closeButton={false}
            longitude={popupInfo?.lng}
            latitude={popupInfo?.lat}
            anchor="top"
            onClose={() => setPopupInfo(undefined)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              content="user-scalable = no"
            >
              <Text bold>
                {popupInfo?.country_code} - {popupInfo.iata_code}
              </Text>
              <Text>{popupInfo?.name}</Text>
            </div>
          </Popup>
        )}
      </MapGL>
    </StyledMapContainer>
  )
}
