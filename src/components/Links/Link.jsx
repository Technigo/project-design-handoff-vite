import "./button-links.css";

// Component for a regular link
export const Link = ({ className, text }) => {
    return (
        <a className={`a-style ${className}`}>{text}</a>
    )
}
