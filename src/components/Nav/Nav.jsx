import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Nav.css"
import { styled } from "styled-components";

import logo from "../../../public/Logotype.svg";


export const Nav = () => {
    return (
        <nav>
                <img className="logo-img " src={logo} alt="Logo" />
                <p className="nav-logotype">YogaBalance</p>
                {/* <img src="" alt="Search-icon" /> */}
                <FiMenu className="menu-icon" />
        </nav>
    );
};
