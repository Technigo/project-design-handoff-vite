import { useLocation, Link } from "react-router-dom";
import "./back-arrow.css";

export const BackArrow = () => {

    const location = useLocation();

    // If the pathname is not "/", show the back arrow
    if (location.pathname !== "/") {

        return (
            <Link to="/">
                <img className={"back-arrow"} src="./assets/icons/black-arrow.svg" alt="Go back" />
            </Link>
        )

    }
}
