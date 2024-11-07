import { GlobalStyles } from "./styles/GlobalStyles";
import { SocialProof } from "./sections/main/Socialproof";

import { Instructions } from "./sections/main/KindActInstructions";
import { Footer } from "./sections/footer/Footer";
import { Header } from "./sections/Header/Header";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";


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
