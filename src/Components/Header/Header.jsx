import { BurgerMenu } from "../Burger Menu/BurgerMenu"
import { Link } from "react-router-dom"
import "./header.css"

export const Header = () => {
 
  return (
    <header>
      <div className="header-content-wrapper">

        
        <BurgerMenu />
       

        <Link to={"/"}>
          <img src="/glactic-logo.svg" alt="galactic fitness logo" className="galactic-logo" />
        </Link>

          <img src="/icons/dart-vader-icon-white.svg" alt="user icon" className="dart-vader-icon" />

        </div>
    </header>
  )
}
