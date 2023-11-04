
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const NewQuestionBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="new-question-btn">
      <PText className="text_btn brown-text" text="Ask a new question" />
    </button>
  );
};