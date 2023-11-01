// import { Hamburger } from "../components/HeaderFolder/Hamburger";
import "./Header.css";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="hamburger">{/* <Hamburger /> */}</div>
      </div>
    </>
  );
};
