//Mounted in 2 pages: AboutP.jsx and LandingP.jsx
import { Logo } from "../ReusableComp/Logo"
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-toggle">☰</div>
            <Logo />
            <p>User</p>
        </div>
    )
}


//<img src="https://placehold.co/25x25" alt="user" />
