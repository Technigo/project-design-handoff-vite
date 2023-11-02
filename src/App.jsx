import { Footer } from "./components/Footer/Footer";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { Header } from "./components/Header/Header";
import { HeroText } from "./components/MainInfo/HeroText";
import { Mantra } from "./components/MainInfo/Mantra";
import { Classes } from "./components/Classes/Classes";
import { ClassesText } from "./components/Classes/ClassesText";

export const App = () => {
  return (
    <>
      <Header />
      <HeroText />
      <Mantra />
      <ClassesText />
      <Classes />
      <SignUpForm />
      <Footer />
    </>
  );
};
