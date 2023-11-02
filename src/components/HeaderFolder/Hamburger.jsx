import "./Hamburger.css";
// import { Link } from "react-router-dom";

export const Hamburger = ({ showMenu }) => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle" className={showMenu ? "open" : ""}>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};
