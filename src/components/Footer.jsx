import "../components/footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src="../src/assets/logo/logo_phone.svg" />
      <ul>
        <div className="footer-line-one">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>studio guidlines</li>

          <li>jobs</li>
        </div>
        <div className="footer-line-two">
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>terms and conditions</li>
          <li>press</li>
        </div>
      </ul>
      <div className="language">
        <img
          src="../src/assets/icon/sweden.png"
          alt="swedish"
          className="swedish"
        />
        <img
          src="../src/assets/icon/uk.png"
          alt="english"
          className="english"
        />
      </div>
    </div>
  );
};
