import React, { memo, useMemo } from "react"
import { Map as MapGL, Marker } from "react-map-gl"
import { StyledMapContainer } from "./styled"
import { airports } from "../../mocks/mock"

export const Map = () => {
  const pins = useMemo(
    () =>
      airports.map(({ coordinates }, index) => {
        return (
          <Marker
            longitude={coordinates.longitude}
            latitude={coordinates.latitude}
            key={`marker-${index}`}
            anchor="top-right"
          />
        )
      }),
    []
  )

  console.log(pins)
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
      </MapGL>
    </StyledMapContainer>
  )
}
