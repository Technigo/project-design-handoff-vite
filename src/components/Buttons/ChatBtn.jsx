
import { PText } from "../Typography/PText";
import "./button_styling.css";

export const ChatBtn = () => {

  return (
    <>
    <button className="chat-btn">
                <PText
                    className="text_btn brown-text"
                    text="Chat now"
                />
            </button>
    </>
  )
}