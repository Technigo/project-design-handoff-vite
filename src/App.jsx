
import { Header } from "../src/Components/Header/Header"
import { MainCont } from "../src/Components/MainCont/MainCont"
import { Footer } from "../src/Components/Footer/Footer"


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
