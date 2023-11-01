import { Button } from "../../Components/Reusable/Buttons/Button"

import "./hero.css"
export const Hero = () => {
  return (
    <div className="hero-section">
        <h1 className="hero-heading-h1">Awaken your inner Jedi</h1>
        <h2 className="hero-heading-h2">Train with the Force!</h2>
        <Button buttonText={"JOIN NOW"} buttonClass={"join-button"}/>
    </div>
  )
}
