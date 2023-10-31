import { NavLink } from "react-router-dom";
import {
  RiArrowDownSLine,
  RiMenuLine,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="top-navbar">
      <ul>
        <li>
          Start with Sadhana <RiArrowDownSLine className="icon" />
        </li>
        <li>
          Kundalini Yoga <RiArrowDownSLine className="icon" />
        </li>
      </ul>
      <RiInstagramFill className="icon" />
      <RiSpotifyFill className="icon" />
      {/* <RiMenuLine className="icon" /> */}
    </nav>
  );
};
