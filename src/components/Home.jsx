import { CTA } from './CTA'
import { Carousel } from './/Carousel'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Quote } from './/Quote'
import { Rating } from './Rating'

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Quote />
        <Rating />
        <Carousel />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
