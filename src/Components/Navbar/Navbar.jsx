import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
  return (
    
      <ul className="nav-bar">
        <Link to="/">
        <li>HOME</li>
        </Link>
        <Link to="/about">
        <li>ABOUT</li>
        </Link>
        {/* <li>WHAT WE OFFER</li>
        <li>FIRST-TIMER</li>
        <li>CONTACT</li> */}
        {/* <div>
          <p>EN</p>
          <p>SE</p>
        </div> */}
      </ul>
   
  )
}
