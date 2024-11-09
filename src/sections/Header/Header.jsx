
import { Introcontent } from "./Introcontent";
import { Slideshow } from "./Slideshow" 
import { StartTodayButton1 } from "../main/StartTodayButton1"; 

export const Header = () => {
    return (
        <section>
            <Introcontent/>
            <Slideshow/>
            <StartTodayButton1/>
        </section>
    )
}