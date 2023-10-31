import { Link } from "react-router-dom";

export const NavigationMenu = () => {
    return (
        <nav className="text-white text-sm">
            <ul className="flex items-center justify-end">
                <li className="mr-4 bg-black p-2">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="mr-4 bg-black p-2">
                    <Link to="/membership">Membership</Link>
                </li>
                <li className="mr-4 bg-black p-2">
                    <Link to="/facilities">Facilities</Link>
                </li>
                <li className="mr-4 bg-black p-2">
                    <Link to="/opening-hours">Opening Hours</Link>
                </li>
                <li className="mr-4 text-black border-solid border-2 border-amber-400 p-2">
                    <Link to="/sign-in">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};
