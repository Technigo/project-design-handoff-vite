
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const ContactBtn = () => {
    let text_send_btn ="Ask a question";

  return (
    <>
    <button className="send-btn">
                <PText
                    className="text_btn brown-text"
                    text={text_send_btn}
                />
            </button>
    </>
  )
}
