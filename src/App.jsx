import { GlobalStyles } from "./styles/GlobalStyles";
import { Introcontent } from "./sections/header/Introcontent";
import { SocialProof } from "./sections/main/Socialproof";
import { Instructions } from "./sections/main/Instructions";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";


export const App = () => {
  return (
    <>
    <ThemeProvider themes={themes}> 
      < GlobalStyles />
      < Introcontent />
      < Instructions />
      < SocialProof />   
    </ThemeProvider>
    </>
  );
};
