import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Link to="/contact">Contact Us</Link>
            <a href="#" target="_blank" rel="noopener noreferrer">FAQ</a>
            <div className="langiage-wrapper">
                <a href="#" target="_blank" rel="noopener noreferrer">English</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Swedish</a>
            </div>
        </div>
    )
}
