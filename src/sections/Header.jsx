import { Hamburger } from "../components/HeaderFolder/Hamburger";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src="/src/assets/logo.svg" alt="logo" />
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>
    </>
  );
};
