import { Button } from "../components/Button"
import heroImage from "/heroImage.png"
import "./hero.css"

export const Hero = () => {
    return(
        <>
            <div className="grid-parent dark-blue">
                <div className="hero section">
                    <h1 className="hero-title">A fitness studio that fits the whole family</h1>
                    <p className="hero-text">With us, you as a parent get time to take care of yourself and your body, while your child can play in a safe environment.</p>
                    <Button text="Become a member"/>
                </div>
                <img className="hero-image" src={heroImage} alt="Picture of a family of three"/>
            </div>
        </>
    )
}