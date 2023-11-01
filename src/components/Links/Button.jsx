import "./button-links.css";

export const Button = ({ className, text }) => {
    return (
        <button className={`btn-style ${className}`}>
            {text}
        </button>
    );
}
