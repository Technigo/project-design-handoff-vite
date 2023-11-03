// Sort out browerrouting and routes rather then links

import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";
import { Footer } from "./Component/Footer";
import { CarouselComponent } from "./Component/Carousel";



export const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <CarouselComponent/>
    <Footer/>
    </>


  )
};
