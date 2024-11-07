import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";

import { Header } from "./sections/Header/Header";
import { Instructions } from "./sections/main/KindActInstructions";
import { SocialProof } from "./sections/main/Socialproof";
import { Footer } from "./sections/footer/Footer";




export const App = () => {
  return (
    <>
    <ThemeProvider themes={themes}> 
      < GlobalStyles />
      < Header />
      < Instructions />
      < SocialProof />  
      < Footer /> 
      </ThemeProvider>
    </>
  );
};
