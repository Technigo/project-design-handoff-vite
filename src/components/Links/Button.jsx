import { Link } from "react-router-dom";
import "./button-links.css";

export const Button = ({ linkTo, onClick, className, text }) => {
    return (
        <Link to={linkTo}>
            <button onClick={onClick} className={`btn-style ${className}`}>
                {text}
            </button>
        </Link>
    );
}
