import React from "react"
import { Map } from "../../components/Map"
import { filteredAirports } from "../../API/airports"

export const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Map airportMarkers={filteredAirports} />
    </div>
  )
}
