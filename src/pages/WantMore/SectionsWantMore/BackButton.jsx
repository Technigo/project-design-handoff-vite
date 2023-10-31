import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export const BackButton = () => {
    return (
        <>
        <Link to="/" className="back-text">
            <IoIosArrowDropleftCircle
            className="back-icon"
            ariaLabel="Go Back to Home page"
            />
            Back
        </Link>
        </>
    )
}