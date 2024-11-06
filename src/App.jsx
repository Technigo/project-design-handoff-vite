import spellsData from "./spells.json";
import "./App.css"
import { Library } from "./components/Library/Library";



export const App = () => {

  return (
    <>
      <Library spellsData={spellsData}/> 
    </>
  );
};
