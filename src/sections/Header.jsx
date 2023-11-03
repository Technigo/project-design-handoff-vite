import { Link } from "react-router-dom"
import logo from "/ff-logo.svg"
import hamburger from "/hamburger-menu.svg"
import "./header.css"

export const Header = () => {
    return (
        <>
        <div className="grid-parent">
            <div className="header">
                <Link to="/"><img className="header-logo" src={logo} alt="Family Fitness Logo" /></Link>
                <img src={hamburger} alt="Menu" />
            </div>
        </div>
        </>
    )
}