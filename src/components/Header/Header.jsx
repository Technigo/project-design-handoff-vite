import { Heading } from "../../reusableComponents/Heading.jsx"
import { Description } from "../../reusableComponents/Description.jsx"
import "./Header.css"
export default function Header() {

  const HeroText = "Find and sharpen your competitive edge.We are the gym that builds champions."

  return (
    <>
      <div className="hero-wrapper">
      <div className="blue-line-hero"></div> {/* blue line */}
      <Heading className="hero-heading" text="Edge Performance" />
        <img src="./Rectangle.png" alt="Rectangle" className="hero-image" />
      <Description className="hero-description" text={HeroText} /> 
      </div>
    </>
  )
}
