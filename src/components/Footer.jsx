import "./footer.css"
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <Link to="/contact" className="footer-link">Contact Us</Link>
                <a href="#" className="footer-anchor" target="_blank" rel="noopener noreferrer">FAQ</a>
                <div className="language-wrapper">
                    <a href="#" className="footer-anchor" target="_blank" rel="noopener noreferrer">English</a>
                    <a href="#" className="footer-anchor" target="_blank" rel="noopener noreferrer">Swedish</a>
                </div>
            </div>
        </footer>
    )
}
