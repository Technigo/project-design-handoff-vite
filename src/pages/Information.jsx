
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { AddressInfo } from "../components/Info/AddressInfo";

export const Information = () => {
  const textOne = "You can have the best gear in the world, but it’s the athlete inside that gear that counts. Step one - getting here: ";
  const heroImageHome = "./infoHero.png"; 
  //Info
  const Address = "156 Marknadsvägen • Täby, Stockholm 12345, Sweden"
  const Phone = "+ 46 08 534 2364"
  const Email = "info @edgeperformance.com"
  const heroImageInfo ="./map.png"

  return (
    <>
      <Header textOne={textOne} image={heroImageHome} />
      <AddressInfo address={Address} phone={Phone} email={Email} image={heroImageInfo} />
      <Contact />
      <Footer />
    
    </>

  )
  

 
};
