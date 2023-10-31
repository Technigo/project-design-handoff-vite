import "./button-links.css";

export const Link = ({ className, text }) => {
    return (
        <a className={`a-style ${className}`}>{text}</a>
    )
}
