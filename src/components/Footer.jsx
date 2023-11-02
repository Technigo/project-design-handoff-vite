import "../components/footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src="./src/assets/logo/logo_phone.svg" />
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>studio guidlines</li>
        <li>jobs</li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>terms and conditions</li>
        <li>press</li>
      </ul>
      <img src="./src/assets/icon/sweden.svg" alt="swedish" />
      <img src="./src/assets/icon/uk.svg" alt="english" />
    </div>
  );
};
