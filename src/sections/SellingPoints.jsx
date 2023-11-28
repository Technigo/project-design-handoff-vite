import { USP } from "../components/USP"

import accessible from "/Wheels.svg"
import barbell from "/Barbell.svg"
import child from "/Small-child.svg"
import building from "/Building.svg"

import "./selling-points.css"

export const SellingPoints = () => {

    const sellingPointsArray = [
        {
            icon: accessible,
            text: "Accessible for everyone",
            link: "Our vision", 
            rotate: "neg-6137deg",
            key: "accessible"
        },
        {
            icon: barbell,
            text: "Thousands of classes",
            link: "Explore classes",
            rotate: "pos-4623deg",
            key: "barbell"
        },
        {
            icon: child,
            text: "Safe and educational",
            link: "About Minifit",
            rotate: "pos-5999deg",
            key: "child"
        }, 
        {
            icon: building,
            text: "Hundreds of centers",
            link: "Find your center",
            rotate: "neg-5432deg",
            key: "building"
        }
    ] 

    return (
        <>
            <div className="grid-parent">
                <div className="section selling-points">
                    {sellingPointsArray.map(
                        (sellingPoint) => 
                            <USP 
                                key={sellingPoint.key} 
                                icon={sellingPoint.icon} 
                                text={sellingPoint.text} 
                                link={sellingPoint.link} 
                                rotation={sellingPoint.rotate}
                            />)}
                </div>
            </div>
        </>
    )
}