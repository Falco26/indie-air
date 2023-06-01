import React from "react"
import { Map } from "../../components/Map"

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
      <Map />
    </div>
  )
}
