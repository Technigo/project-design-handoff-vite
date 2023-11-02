
import "./button_styling.css";
import { PText } from "../Typography/PText";




export const FreeTrialBtn = () => {
    let text_button = "Join the journey";

    return (
        <>
            <button className="trial-btn">
                <PText
                    className="text_btn brown-text"
                    text={text_button}
                />
            </button>
        </>
    )
}
