import { MiniFitComp } from "../components/MiniFitComp"

import "./mini-fit.css"

export const MiniFit = () => {

    const miniFitArray = [
        {
            picPath: "/mini-fit/mini-fit-image.png",
            picCaption: "Friends"
        },
        {
            picPath: "/mini-fit/Minifit2.png",
            picCaption: "Learning"
        }, 
        {
            picPath: "/mini-fit/Minifit3.png",
            picCaption: "Exploring"
        }, 
        {
            picPath: "/mini-fit/Minifit4.png",
            picCaption: "Safety"
        }, 
        {
            picPath: "/mini-fit/Minifit5.png",
            picCaption: "Age Groups"
        }
    ]
    let picLink = "Learn More"

    return(
        <>
            <div className="grid-parent">
                <div className="mini-fit section">
                    <h3>What is MiniFit?</h3>
                    <div className="mini-fit-scroll">
                        {miniFitArray.map((item) => (
                            <MiniFitComp
                                key={item.picCaption}
                                image={item.picPath}
                                caption={item.picCaption}
                                link={picLink} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}