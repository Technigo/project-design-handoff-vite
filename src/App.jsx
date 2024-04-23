import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Card } from "./components/Card";
import { List } from "./components/List"
import { Article } from "./components/Article";
import { Footer } from "./components/Footer"
import { BgBlob } from "./components/BgBlob";

export const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Testimonials />
    <Card />
    <List />
    <Article />
    <BgBlob />
    <Footer />
  </>
  )

};
