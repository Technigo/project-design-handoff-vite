import { ButtonFAQ } from "./ButtonFAQ";
import data from "../json/FAQs.json";
import arrow from "/arrow.svg";

export const FAQs = () => {
  const getQuestions = (startIndex, endIndex) => {
    return data.questions.slice(startIndex, endIndex).map((question, index) => (
      <li className="border-b-2 flex justify-between" key={index}>
        {question}
        <img  src={arrow} />
      </li>
    ));
  };

  return (
    <div>
      <h2 className="font-montserrat text-xl font-semibold text-center mb-16">
        Find Your Answers Here
      </h2>
      <div className="grid grid-cols-2 gap-1 mb-16">
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
      <div className="flex justify-evenly">
        <h3 className="font-montserrat text-sm font-medium">FAQs</h3>
        <button className="font-montserrat border-solid border-current border text-xs bg-grey-dot2 hover:bg-lightgrey active:bg-grey-dot1 rounded-full w-28 h-8">
          Discover All Here
        </button>
      </div>
      <ul>{getQuestions(0, 6)}</ul>
      <ul>{getQuestions(6, 12)}</ul>
    </div>
  );
};
