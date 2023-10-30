
import { Header } from "../src/components/Header/Header"
import { MainCont } from "../src/components/MainCont/MainCont"
import { Translation } from "./components/Translation"
import { Footer } from "../src/components/Footer/Footer"
import { LottieAni } from "../src/components/LottieAni"
import { LottieAdv } from "./components/LottieAdv";
import "./index.css"

//Glöm inte att mounta MainCont och Footer här nedan!
export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <MainCont />
      <Translation />
      <Footer />
      <LottieAni />
      <LottieAdv />
    </div>
  );
};
