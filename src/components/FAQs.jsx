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
      <h2 className="text-green-700">Find Your Answers Here</h2>
      <div className="grid grid-cols-2 gap-1">
      <div className="flex justify-center items-center">
      <ButtonFAQ text={"Prices"} />
       </div>
  <div className="flex justify-center items-center">
    <ButtonFAQ text={"Bookings"} />
  </div>
  <div className="flex justify-center items-center">
    <ButtonFAQ text={"My Account"} />
  </div>
  <div className="flex justify-center items-center">
    <ButtonFAQ text={"Facilities"} />
  </div>
      </div>
      <h3>FAQs</h3>
      <button>Discover All Here</button>
      <ul>{getQuestions(0, 6)}</ul>
      <ul>{getQuestions(6, 12)}</ul>
    </div>
  );
};
