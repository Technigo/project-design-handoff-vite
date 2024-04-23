import { ButtonFAQ } from "./ButtonFAQ";
import data from "../json/FAQs.json";

export const FAQs = () => {
  const getQuestions = (startIndex, endIndex) => {
    return data.questions
      .slice(startIndex, endIndex)
      .map((question, index) => <li key={index}>{question}</li>);
  };

  return (
    <div>
      <h2>Find Your Answers Here</h2>
      <ButtonFAQ text={"Prices"} />
      <ButtonFAQ text={"Bookings"} />
      <ButtonFAQ text={"My Account"} />
      <ButtonFAQ text={"Facilities"} />
      <h3>FAQs</h3>
      <button>Discover All Here</button>
      <ul>{getQuestions(0, 6)}</ul>
      <ul>{getQuestions(6, 12)}</ul>
    </div>
  );
};
