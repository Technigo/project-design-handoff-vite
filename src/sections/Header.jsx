import logo from "/ff-logo.svg"
import hamburger from "/hamburger-menu.svg"
import "./header.css"

export const Header = () => {
    return (
        <>
        <div className="grid-parent">
            <div className="header">
                <img className="header-logo" src={logo} alt="Family Fitness Logo" />
                <img src={hamburger} alt="Menu" />
            </div>
        </div>
        </>
    )
}