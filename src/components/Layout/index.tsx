import React from "react"
import { Layout as LayoutAnt } from "antd"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export const BaseLayout = () => {
  return (
    <LayoutAnt style={{ alignItems: "center" }}>
      <Header buttonText="Cerca" datePicker imgLogo input passengers />
      <div>
        <Outlet />
      </div>
    </LayoutAnt>
  )
}
