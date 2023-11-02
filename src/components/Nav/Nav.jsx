import { NavLink } from "react-router-dom";
import navElement from "../../../public/assets/navElement.svg";
import { FiMenu } from "react-icons/fi";
import searchIcon from "../../../public/assets/searchIcon.svg";
import "./Nav.css";
import { styled } from "styled-components";

import logo from "../../../public/Logotype.svg";

export const Nav = () => {
    return (
        <nav>
            <div className="nav-content-wrapper">
                <img className="logo-img" src={logo} alt="Logo" />
                <p className="nav-logotype">YogaBalance</p>
                <div className="nav-btn-container">
                    <img src={searchIcon} className="search-icon" />
                    <FiMenu className="menu-icon" />
                </div>
            </div>
        </nav>
    );
};
