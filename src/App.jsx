import { Header } from "./components/Header/Header"
import { PersonalizedSpells } from "./components/PersonalizedSpells/PersonalizedSpells"
import { Footer } from "./components/Footer/Footer"
import spellsData from "./spells.json";
import quotesData from "./quotes.json"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Library } from "./components/Library/Library";

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Library spellsData={spellsData} />
      <PersonalizedSpells quotesData={quotesData} />
      <Footer />
    </>
  )
}