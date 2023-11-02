import { Button } from "../Links/Button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./cards-section-header.css";

export const CardsSectionHeader = ({ heading, text, className, button }) => {

    return (
        <article className="card-section-header-texts">
            <h2>{heading}</h2>
            <p>{text}</p>
            <div className="a-style-btn">
                <Button className={`a-style ${className}`} text={button} />
                <HiOutlineArrowSmRight />
            </div>
        </article>
    )
}
