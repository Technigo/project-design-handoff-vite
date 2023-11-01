// import { Navbar } from "../Navbar/Navbar"
import "./header.css"
// import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

// // const [showNavbar, setShowNavbar] = useState("menu hidden")
// // const [isMenuClicked, setIsMenuClicked] = useState(false)



// // const isBurgerClicked = () => {
// // if (!isMenuClicked) {
// //   setShowNavbar("menue visible")
// // }
// // else {
// //   setShowNavbar("menu hidden")  
// // }
// // setIsMenuClicked(!isMenuClicked)
// // }

    
  return (
    <header>

      {/* <Navbar /> */}
<div className="header-content-wrapper">
        <Link to={"./about"}>
          <img src="/icons/burger-icon.svg" alt="" className="burger-icon" />
        </Link>

        <Link to={"/"}>
          <img src="/glactic-logo.svg" alt="" className="galactic-logo" />
        </Link>

          <img src="/icons/dart-vader-icon-white.svg" alt="" className="dart-vader-icon" />
        </div>
    </header>
  )
}
