
import "./button_styling.css";
import { PText } from "../Typography/PText";




export const FreeTrialBtn = () => {

    return (
        <>
            <button className="trial-btn">
                <PText
                    className="text_btn brown-text"
                    text="Join the journey"
                />
            </button>
        </>
    )
}
