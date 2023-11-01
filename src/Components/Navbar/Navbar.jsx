import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/icons/exit-icon.svg" alt=""/>
      <ul className="navbar-list">
        <Link to="/">
        <li>HOME</li>
        </Link>
        <Link to="/about">
        <li>ABOUT</li>
        </Link>
        <li>WHAT WE OFFER</li>
        <li>FIRST-TIMER</li>
        <li>CONTACT</li>
         <div>
          <p>EN</p>
          <p>SE</p>
        </div>
      </ul>
   </nav>
  )
}

// -------------------------- Navbar with changing burger -------------------------
// import './navbar.css'
// import { useState } from 'react'

// const Navbar = () => {

//     // to change burger classes
//     const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//     const [menu_class, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle burger menu change
//     const updateMenu = () => {
//         if(!isMenuClicked) {
//             setBurgerClass("burger-bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setBurgerClass("burger-bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return(
//         <div style={{width: '100%', height: '100vh'}}>
//             <nav>
//                 <div className="burger-menu" onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                 </div>

//             </nav>
// <ul>
//   <li>Home</li>
//   <li>About</li>
//   <li>More</li>
//   <li>More</li>

// </ul>
//             <div className={menu_class}></div>
//         </div>
//     )
// }

// export default Navbar
