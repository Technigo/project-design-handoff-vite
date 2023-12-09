import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion' 

import { HomePage } from "./pages/HomePage"
import { AboutPage } from './pages/AboutPage'
import { PageNotFound } from "./pages/PageNotFound"
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

import './App.css'

export const App = () => {

  const location = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
