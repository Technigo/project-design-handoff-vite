

import { PText } from "../Typography/PText";
import "./button_styling.css";

export const SubmitBtn = () => {
    return (
        <>
            <button type="submit" className="send-btn">
                <PText
                    className="text_btn brown-text"
                    text="Send"
                />
            </button>
        </>
    )
}
