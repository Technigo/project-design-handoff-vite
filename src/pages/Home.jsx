import { Article } from "../components/Article/Article";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { InfoHome } from "../components/Info/InfoHome";

export const Home = () => {

  const MainHeading="Edge Performance"
  const textOne = "Find and sharpen your competitive edge.";
  const textTwo = "We are the gym that builds champions.";
  const heroImageHome = "./homeHero.png"; 
//Info
  const MainText = "You have put in the hours, you have put in the sweat. You are already a relentless competitor. You have strength, explosivity, speed and balance - but we will help you gain more. Are you a serious hockey player ready to take your game to the next level?"
  const Text = "Click below to see more about what we do for our athletes: "
  const heroImageInfo = null;
  return (
    <>
      <Header heading={MainHeading} textOne={textOne} textTwo={textTwo} image={heroImageHome} />
      <InfoHome  mainText={MainText} text={Text} image={heroImageInfo} />
      <Article />
      <Footer />
    </>
  );
  

 
};
