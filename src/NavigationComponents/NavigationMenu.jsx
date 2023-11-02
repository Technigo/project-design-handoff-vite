import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/HamburgerMenu.svg"

export const NavigationMenu = () => {
    return (
        <nav className="text-white text-base">
            <ul className="flex items-center justify-end">
                <li className="hover:shadow-yellow-box hidden mr-4 bg-black p-2 lg:flex mr-16">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-4 bg-black p-2 lg:flex mr-16 hover:shadow-yellow-box">
                    <Link to="/membership">Membership</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-4 bg-black p-2 lg:flex mr-16">
                    <Link to="/facilities">Facilities</Link>
                </li>
                <li className="hover:shadow-yellow-box hidden mr-4 bg-black p-2 lg:flex mr-16">
                    <Link to="/opening-hours">Opening Hours</Link>
                </li>

                <li className="hover:shadow-yellow-box h-7 left-1 p-1 mt-[-2rem] lg:mt-[-0rem] mr-4 text-black border-solid border-2 border-black h-9">
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <img className="h-5 mt-[-2rem] lg:hidden" src={HamburgerMenu} alt="Hamburger menu" />
            </ul>
        </nav>
    );
};
