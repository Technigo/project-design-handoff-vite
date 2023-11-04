
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { AddressInfo } from "../components/Info/AddressInfo";
import { useTranslation } from "react-i18next";



export const Information = () => {
  const { t } = useTranslation("information");

 const MainHeading = t("header.title");
  const textOne = t("header.textOne");
  const heroImageHome = "./infoHero.png";
  const Address = t("address");
  const Phone = t("phone");
  const Email = t("email");
  const heroImageInfo = "./map.png";

  return (
    <>
      <Header  heading={MainHeading} textOne={textOne} image={heroImageHome} />
      <AddressInfo address={Address} phone={Phone} email={Email} image={heroImageInfo} />
      <Contact />
      <Footer />
    
    </>

  )
  

 
};
