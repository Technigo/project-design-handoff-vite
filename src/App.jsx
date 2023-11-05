import { Header } from "./Component/ReusableComponents/Header";
import { Hero } from "./Component/Hero";
import { Footer } from "./Component/ReusableComponents/Footer";
import { CarouselComponent } from "./Component/Carousel";
import { AboutUs } from "./Component/AboutUs";



export const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <CarouselComponent/>
    <AboutUs/>
    <Footer/>
    </>


  )
};


// // Sort out browerrouting and routes rather then links
// import { BrowserRouter, Routes } from "react-router-dom";
// import routing from "./Routes/Routes";

// export const App = () => {

//   return (
//     <>
//     <BrowserRouter>
//     <main>
//       <Routes>{routing}</Routes>
//     </main>
//     </BrowserRouter>
//     </>
//   )
// }