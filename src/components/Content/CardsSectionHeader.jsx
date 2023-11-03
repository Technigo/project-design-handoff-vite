import { Button } from "../Links/Button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./cards-section-header.css";

// Component for the header of the cards-sections
export const CardsSectionHeader = ({ heading, text, linkTo, className, button }) => {

    return (
        <article className="card-section-header-texts">
            <h2>{heading}</h2>
            <p>{text}</p>
            <div className="a-style-btn">
                <Button linkTo={linkTo} className={`a-style ${className}`} text={button} />
                <HiOutlineArrowSmRight />
            </div>
        </article>
    )
}
