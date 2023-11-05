import { Footer } from "../components/Footer/Footer";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { Header } from "../components/Header/Header";
import { HeroText } from "../components/MainInfo/HeroText";
import { Mantra } from "../components/MainInfo/Mantra";
import { Classes } from "../components/Classes/Classes";
import { ClassesText } from "../components/Classes/ClassesText";
import { Articles } from "../components/Articles/Articles";
import { useTranslation } from "react-i18next";

// export const Home = () => {
//     const { t, i18n } = useTranslation();

//       return (
//         <div>
//           <Header/>
//           <h1>{t("homePage.mainSection.secondaryHeading")}</h1>
//           <SignupForm />
//           <Footer />
//         </div>
//       );
//     };

export const HomePage = () => {
  return (
    <>
      <Header />
      <HeroText />
      <Mantra />
      <Articles />
      <ClassesText />
      <Classes />
      <SignUpForm />
      <Footer />
    </>
  );
};
