import { Link } from "react-router-dom";
import "./button-links.css";

// Component for the buttons and "link-like" buttons. Utilizes the Link-component from react-router-dom to link to other pages
export const Button = ({ linkTo, onClick, className, text }) => {
    return (
        <Link to={linkTo}>
            <button onClick={onClick} className={`btn-style ${className}`}>
                {text}
            </button>
        </Link>
    );
}
