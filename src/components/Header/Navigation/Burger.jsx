// import { HiOutlineBars3 } from "react-icons/hi2";
import "./burger.css";

export const Burger = ({ onClick }) => {
    return (
        <img onClick={onClick} src="./assets/icons/hamburger-menu.svg" alt="Hamburger menu icon" className="burger-bars" />
    )
}
