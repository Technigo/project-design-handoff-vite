import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from "./pages/HomePage"
import { AboutPage } from './pages/AboutPage'
import { NavBar } from './sections/NavBar'
import { Footer } from './sections/Footer'

import './App.css'

export const App = () => {

  return (
    <>
    <NavBar />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>

    <Footer />
    </>
  )
}
