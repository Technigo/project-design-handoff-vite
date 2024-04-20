import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CTA } from './components/CTA'
import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Quote } from './components/Quote'
import { Rating } from './components/Rating'
import { USP } from './components/USP'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
        <Header />
        <main>
          <Hero />
          <Quote />
          <USP />
          <Rating />
          <USP />
          <Carousel />
          <CTA />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
