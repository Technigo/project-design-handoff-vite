//Mounted in 2 pages: AboutP.jsx and LandingP.jsx
import { Logo } from "../ReusableComp/Logo"
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-toggle">☰</div>
            <div className="navbar-logo"><Logo /></div>
            <div className="navbar-profile"><img src="public/dvicon.png" alt="profile" /></div>
        </div>
    )
}

