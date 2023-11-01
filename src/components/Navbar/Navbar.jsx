//Mounted in 2 pages: AboutP.jsx and LandingP.jsx
import { Link } from "react-router-dom"
import { Logo } from "../ReusableComp/Logo"
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-toggle"><Link to="/about">☰</Link></div>
            <div className="navbar-logo"><Link to="/"><Logo /></Link></div>
            <div className="navbar-profile"><img src="/dvicon.png" alt="profile" /></div>
        </div>
    )
}

