
import "./freeTrialBtn.css"
import { PText } from "../Typography/PText"




export const FreeTrialBtn = () => {
    let text_button = "Join the journey";

    return (
        <>
            <button className="trial-btn">
                <PText
                    className="trial_btn_text brown-text"
                    text={text_button}
                />
            </button>
        </>
    )
}
