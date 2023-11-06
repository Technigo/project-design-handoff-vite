import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from './components/HomePage/HomePage.jsx'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App