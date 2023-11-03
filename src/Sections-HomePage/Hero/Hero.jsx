import { Button } from "../../Components/Reusable/Buttons/Button"

import "./hero.css"
export const Hero = () => {
  return (
    <div className="hero-section">
      {/* <div className="hero-content-wrapper"> */}
      <div className="heading-text-wrapper">
        <h1 className="hero-heading-h1">Awaken your inner Jedi</h1>
        <h2 className="hero-heading-h2">Train with the Force!</h2>
        </div>
        <div className="join-button-container">
        <Button buttonText={"JOIN NOW"} buttonClass={"join-button"}/>
        </div>
        {/* </div> */}
    </div>
  )
}
