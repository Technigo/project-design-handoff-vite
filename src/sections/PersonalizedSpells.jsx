
import data from "../../quotes.json"; // Rättade import-syntaxen
import { Quotes } from "../components/Quotes";

export const PersonalizedSpells = () => {
  return (
    <div>
      {data.quotes.map((quote, index) => (
        <Quotes
          key={index}
          quote={quote.text}
        />
      ))}
    </div>
  );
};




