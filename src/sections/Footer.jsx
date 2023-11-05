import { Link } from "react-router-dom"
import logo from "/footer/ff-logo-footer.png"
import fb from "/footer/fb-link.svg"
import insta from "/footer/insta-link.svg"
import tiktok from "/footer/tiktok-link.svg"
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
    const socialArray = [ fb, insta, tiktok ]


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
                <div className="social-container">
                    {socialArray.map((item) => <img key={toString(item)} className="social-media" src={item} />)}
                </div>
            </div>
        </div>
        </>
    )
}