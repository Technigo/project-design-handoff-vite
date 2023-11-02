import { MiniFitComp } from "../components/MiniFitComp"
import minifitPic from "/mini-fit/mini-fit-image.png"

import "./mini-fit.css"

export const MiniFit = () => {

    const picPath = minifitPic
    let picCaption = "Friends"
    let picLink = "Learn More"

    return(
        <>
            <div className="grid-parent">
                <div className="mini-fit section">
                    <h3>What is MiniFit?</h3>
                    <div className="mini-fit-scroll">
                    <MiniFitComp
                        image={picPath}
                        caption={picCaption}
                        link={picLink} />
                    <MiniFitComp
                        image={picPath}
                        caption={picCaption}
                        link={picLink} />
                    <MiniFitComp
                        image={picPath}
                        caption={picCaption}
                        link={picLink} />
                    </div>
                </div>
            </div>
        </>
    )
}