import { Header } from "../Component/ReusableComponents/Header"
import { Hero } from "../Component/Hero"
import { CarouselComponent } from "../Component/Carousel"
import { AboutUs } from "../Component/AboutUs"
import { Footer } from "../Component/ReusableComponents/Footer"


export const Home = () => {


  return (
    <>
    <Header/>
    <Hero/>
    <CarouselComponent/>
    <AboutUs/>
    <Footer/>
    </>
  )
}
