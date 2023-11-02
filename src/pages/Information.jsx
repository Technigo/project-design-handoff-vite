
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info-text/Info";

export const Information = () => {
  const textOne = "You can have the best gear in the world, but it’s the athlete inside that gear that counts. Step one - getting here: ";
  const heroImageHome = "./infoHero.png"; 
  const MainText = "156 Marknadsvägen • Täby, Stockholm 12345, Sweden +46 08 534 2364 info@edgeperformance.com"
  const heroImageInfo ="./map.png"

  return (
    <>
       <Header textOne={textOne}image={heroImageHome} />
      <Info  mainText={MainText} image={heroImageInfo} />
      <Footer />
    
    </>

  )
  

 
};
