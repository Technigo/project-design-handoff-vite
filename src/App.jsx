
import { ContactPage } from "./Components/ContactPage";
import { FooterSec } from "./Components/FooterSec";
import { Header } from "./Components/Header";
import { HeroSec } from "./Components/HeroSec";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import { HowSec } from "./Components/HowSec";


export const App = () => {
  return (
    <BrowserRouter>
    

    <Routes>
      <Route path="/" element={
        <>

      <Header />
      <HeroSec />
      <HowSec />
      <FooterSec />
        </>
     
      }/>
      <Route path="/contact" element={<ContactPage />}> </Route>
   

    </Routes>

    

  </BrowserRouter>
 )};
