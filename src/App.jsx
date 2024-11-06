import { Header } from "./components/Header/Header"
// import { PersonalizedSpells } from "./components/PersonalizedSpells/PersonalizedSpells"
// import { Footer } from "./components/Footer/Footer"
import spellsData from "./spells.json";
import "./App.css"
import { Library } from "./components/Library/Library";




export const App = () => {

  return (
    <>
      <Header />
      <Library spellsData={spellsData} />
      {/* <PersonalizedSpells />
      <Footer />  */}
    </>
  )
}