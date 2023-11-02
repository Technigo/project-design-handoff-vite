import {
  RiArrowDownSLine,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <nav className="navbar-footer">
        <span>
          ENG <RiArrowDownSLine className="icon" />
        </span>
        <ul>
          <li>HOME</li>
          <li>Newsletter</li>
          <li>40 Days of Sadhana</li>
        </ul>
      </nav>
      <div className="social-icons">
        <RiInstagramFill className="icon" />
        <RiSpotifyFill className="icon" />
      </div>
    </footer>
  );
};
