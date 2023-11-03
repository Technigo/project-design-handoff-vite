import { Link } from "react-router-dom"
import logo from "/ff-logo-footer.png"
import "./footer.css"


export const Footer = () => {
    const linkArray = [{
        name: "About us",
        to: "/about"
    }, 
    {
        name: "Find your center", 
        to: "/"
    }, 
    {
        name: "Customer Support",
        to: "/"
    }, 
    {
        name: "Membership", 
        to: "/"
    }, 
    {
        name: "Cookies, privacy and security",
        to: "/"
    }]

    return (
        <>
        <div className="grid-parent red">
            <div className="footer section">
                <Link to="/"><img className="footer-logo" src={logo} alt="Family Fitness Logo" /></Link>
                <ul>
                    {linkArray.map(item => (
                        <li key={item.name}>
                                <Link to={item.to}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}