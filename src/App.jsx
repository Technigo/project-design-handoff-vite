import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from "./pages/HomePage"
import { AboutPage } from './pages/AboutPage'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

import './App.css'

export const App = () => {

  return (
    <>
    <Header />
    
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
