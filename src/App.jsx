import { Footer } from "./components/Footer";
import { Strength } from "./components/Strength";
import { Reviews } from "./components/Reviews";
import { Philosophy } from "./components/Philosophy";
import { Hero } from "./components/Hero";
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import mainImg from "/assets/main-image.svg"



export const App = () => {

  return (
    <div>
   <Hero heroImg={mainImg}  />
    <Reviews leftBlob={leftblob} rightBlob={rightblob} />
    <Philosophy  />
    <Strength />
    <Footer />
  </div>

  )

}
