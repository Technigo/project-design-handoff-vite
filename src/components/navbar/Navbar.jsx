// import { Link } from "react-router-dom";
import burgerMenu from "../../assets/burger-menu.svg";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../buttons/primary/PrimaryBtn";
import { SecondaryBtn } from "../buttons/secondary/SecondaryBtn";

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { t } = useTranslation();
  const navList = t("navList", { returnObjects: true });

  return (
    <nav>
      <img src={logo} alt="company-logo" className="nav-logo" />
      <button
        className="hamburger-menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          console.log(isNavExpanded);
        }}
      >
        <img src={burgerMenu} alt="hamburger-icon" />
      </button>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        {/* <ul>
          {navList.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul> */}

        <ul>
          {navList.map((benefit, index) => {
            if (benefit === "About us") {
              return (
                <Link to="/about" key={index}>
                  <li>{benefit}</li>
                </Link>
              );
            } else {
              return <li key={index}>{benefit}</li>;
            }
          })}
          <div className="navBtns">
            <PrimaryBtn btnName={t("signUpBtn")} />
            <SecondaryBtn btnName={t("login")} />
          </div>
        </ul>

        {/* <ul>
          <li>
            <a>{t("navClasses")}</a>
          </li>
          <li>
            <a>{t("navYogaTypes")}</a>
          </li>
          <li>
            <a>{t("navBenefits")}</a>
          </li>
          <li>
            <a>{t("navTeachers")}</a>
          </li>
          <Link to="/about">
            <li>{t("navAbout")}</li>
          </Link>
          <li>
            <button>{t("navSignUpBtn")}</button>
            <button>{t("navSignInBtn")}</button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
