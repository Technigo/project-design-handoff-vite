import { Article } from "../components/Article/Article";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { InfoHome } from "../components/Info/InfoHome";
import { Navigation } from "../components/Navigation/Navigation";
import { useTranslation } from "react-i18next";

export const Home = () => {

  const { t } = useTranslation('home');

  const MainHeading=t("header.title")
  const textOne = t("header.textOne");
  const textTwo = t("header.textTwo");
  const heroImageHome = "./homeHero.png"; 
//Info
  const MainText = t("mainText");
  const Text =t("text")
  const heroImageInfo = null;
  return (
    <>
      <Header heading={MainHeading} textOne={textOne} textTwo={textTwo} image={heroImageHome} />
      <InfoHome  mainText={MainText} text={Text} image={heroImageInfo} />
      <Article />
      <Footer />
      <Navigation />
    </>
  );
  

 
};
