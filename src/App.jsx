import { GlobalStyles } from "./styles/GlobalStyles";
import { Introcontent } from "./sections/header/Introcontent";
import { SocialProof } from "./sections/main/Socialproof";
import { Instructions } from "./sections/main/Instructions";

export const App = () => {
  return (
    <>
      < GlobalStyles />
      < Introcontent />
      < Instructions />
      < SocialProof />   
    </>
  );
};
