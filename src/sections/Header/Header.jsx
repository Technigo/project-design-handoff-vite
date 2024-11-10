
import { Introcontent } from "./Introcontent";
import { Slideshow } from "./Slideshow" 
import { StartTodayButton } from "../footer/SocialLinks";


export const Header = () => {
    return (
        <section>
            <Introcontent/>
            <Slideshow/>
            <StartTodayButton showFinePrint = {false} applyPadding={true} />
        </section>
    )
}