
import { Header } from "../src/components/Header/Header"
import { MainCont } from "../src/components/MainCont/MainCont"
import { Footer } from "../src/components/Footer/Footer"


//Glöm inte att mounta MainCont och Footer här nedan!
export const App = () => {
  return (
    <div>
      <Header />
      <MainCont />
      <Footer />
    </div>
  );
};
