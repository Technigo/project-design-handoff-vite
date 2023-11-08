import { useLocation, Link } from "react-router-dom";
import "./back-arrow.css";

// Component for the back arrow that is used below the header on all pages but the startpage ("/")
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
