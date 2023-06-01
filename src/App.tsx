import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Results } from "./pages/Results"
import { BaseLayout } from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path={"/results"} element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
