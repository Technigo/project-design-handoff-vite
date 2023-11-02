import { USP } from "../components/USP" 
import accessible from "/Wheels.svg"
import barbell from "/Barbell.svg"
import child from "/Small-child.svg"
import building from "/Building.svg"

import "./selling-points.css"

export const SellingPoints = () => {
    const sellingPointsArray = [
        {
            index: 0,
            icon: accessible,
            text: "Accessible for everyone",
            link: "Our vision", 
            rotate: "neg-6137deg"
        },
        {
            index: 1,
            icon: barbell,
            text: "Thousands of classes",
            link: "Explore classes",
            rotate: "pos-4623deg"
        },
        {
            index: 2,
            icon: child,
            text: "Safe and educational",
            link: "About Minifit",
            rotate: "pos-5999deg"
        }, 
        {
            index: 3,
            icon: building,
            text: "Hundreds of centers",
            link: "Find your center",
            rotate: "neg-5432deg"
        }
    ] 
    return (
        <>
            <div className="grid-parent">
                <div className="section selling-points">
                    {sellingPointsArray.map((sellingPoint) => <USP key={sellingPoint.index} icon={sellingPoint.icon} text={sellingPoint.text} link={sellingPoint.link} rotation={sellingPoint.rotate} />)}
                    
                </div>
            </div>
        </>
    )
}