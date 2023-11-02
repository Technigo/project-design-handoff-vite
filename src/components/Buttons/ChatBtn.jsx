
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const ChatBtn = () => {
    let text_send_btn ="Chat now";

  return (
    <>
    <button className="chat-btn">
                <PText
                    className="text_btn brown-text"
                    text={text_send_btn}
                />
            </button>
    </>
  )
}