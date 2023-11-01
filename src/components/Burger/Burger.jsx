// import { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
// import burgerIcon from "../../assets/Menu.svg";
import "./BubbleStyle.css";

export const Burger = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="yoga" className="menu-item" href="/about">
          Yoga
        </a>
        <a id="scheduele" className="menu-item" href="/contact">
          Scheduele
        </a>
        <a id="about" className="menu-item" href="/">
          About us
        </a>
        <a id="faq" className="menu-item" href="/about">
          FAQ
        </a>

        {/* <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={burgerIcon} alt="Hamburger Menu" />
        </button>
        {isOpen && (
          <nav className="menu">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/yoga" onClick={() => setIsOpen(false)}>
              Yoga
            </Link>
            <Link to="/scheduele" onClick={() => setIsOpen(false)}>
              Scheduele
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link to="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </nav>
        )} */}
      </Menu>
    </>
  );
};
