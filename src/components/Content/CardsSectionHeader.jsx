import { Link } from "react-router-dom";

export const CardsSectionHeader = ({ heading, text, button }) => {

    return (
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
            <Link>{button}</Link>
        </div>
    )
}
