import "./button-links.css";

export const Button = ({ className, text }) => {
    return (
        <a className={`a-style ${className}`}>{text}</a>
    )
}
