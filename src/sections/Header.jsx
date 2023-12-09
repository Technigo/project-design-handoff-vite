import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "/ff-logo.svg"
import "./header.css"
import { ButtonStyled } from "../components/ButtonStyled"

export const Header = () => {
    const [ burgerVisible, setBurgerVisible ] = useState(false)
    const [ burgerIcon, setBurgerIcon ] = useState(true)

    const handleClick = () => {
        setBurgerVisible(() => burgerVisible ? false : true)
        setBurgerIcon(() => burgerIcon ? false : true)
    }

    return (
        <>
        <div className="grid-parent grid-parent-header">
            <div className="header">
                <Link to="/">
                    <img className="header-logo" src={logo} alt="Family Fitness Logo" />
                </Link>
                <Link to="/contact-us" className="become-member-header">
                    <ButtonStyled text="Become a member" />
                </Link>
                <div className={`burger-menu-icon ${burgerIcon ? "" : "close"}`} id="burger-menu" onClick={handleClick}>
                    <span></span>
                </div>
            </div>
            {burgerVisible && 
                <div className={burgerVisible ? "overlay" : ""} id="menu">
                    <div className="burger-links">
                        <Link to="/" onClick={handleClick}>Find your center</Link>
                        <Link to="/" onClick={handleClick}>Membership</Link>
                        <Link to="/" onClick={handleClick}>MiniFit</Link>
                        <Link to="/about" onClick={handleClick}>About us</Link>
                    </div>
                    <div className="log-out-link">
                        <Link to="/" onClick={handleClick}>Log out</Link>
                    </div>
                </div>
            }
        </div>
        </>
    )
}