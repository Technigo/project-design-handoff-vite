import {
  RiArrowDownSLine,
  RiCloseFill,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";
import { useState } from "react";
import { HomeLink } from "./HomeLink";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="top-navbar">
      <div className="nav-container">
        <HomeLink />
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <RiCloseFill className="icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div>
        <div className={`nav-menu ${showNavbar && "active"}`}>
          <ul>
            <li>
              Start with Sadhana <RiArrowDownSLine className="icon" />
            </li>
            <li>
              Kundalini Yoga <RiArrowDownSLine className="icon" />
            </li>
          </ul>
          <div className="social-icons">
            <RiInstagramFill className="icon" />
            <RiSpotifyFill className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
