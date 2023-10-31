import { Description } from "../../reusableComponents/Description.jsx"
import "./Info.css"

export default function Info() {

  const MainText = "You have put in the hours, you have put in the sweat. You are already a relentless competitor. You have strength, explosivity, speed and balance - but we will help you gain more. Are you a serious hockey player ready to take your game to the next level?"

  const Text = "Click below to see more about what we do for our athletes: "

  return (
    <>
      <div className="info-wrapper">
      <div className="red-line"></div> {/* blue line */}
      <Description className="info-description" text={MainText} /> 
      <p> {Text} </p>
        <div className="blue-line"></div> {/* red line */}
        </div>
      </>
  )
}

