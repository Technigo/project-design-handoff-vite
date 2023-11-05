
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const Button = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <PText className="text_btn brown-text" text={text} />
    </button>
  );
};

