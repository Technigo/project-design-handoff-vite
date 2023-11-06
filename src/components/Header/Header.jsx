// import { Burger } from "../Burger/Burger";
import "./Header.css";
import logo from "../../assets/Logo-text.svg";

export const Header = () => {
  return (
    <>
      <header className="header-container">
        <img src={logo} alt="ARN yoga studio logo" className="logo-text" />
        {/* <Burger /> */}
      </header>
    </>
  );
};
