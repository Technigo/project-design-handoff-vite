import { GlobalStyles } from "./styles/GlobalStyles";
import { SocialProof } from "./sections/main/Socialproof";
import { Instructions } from "./sections/main/KindActInstructions";
import { Footer } from "./sections/footer/Footer";
import { Header } from "./sections/Header/Header";

export const App = () => {
  return (
    <>
      < GlobalStyles />
      < Header />
      < Instructions />
      < SocialProof />  
      < Footer /> 
    </>
  );
};
