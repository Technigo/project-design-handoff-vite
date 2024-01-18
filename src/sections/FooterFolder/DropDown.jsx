import { useState } from "react";
import { useTranslation } from "react-i18next";
import en from "../../assets/icons/en.svg";
import no from "../../assets/icons/no.svg";
import se from "../../assets/icons/se.svg";
import "./DropDown.css";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown-wrapper">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={en}
          alt="English Flag"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "8px",
            borderRadius: "50%",
          }}
        />
        English
      </button>
      {isOpen && (
        <div>
          <p onClick={() => changeLanguage("en")}>
            <img
              src={en}
              alt="English Flag"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "8px",
                borderRadius: "50%",
              }}
            />
            English
          </p>
          <p onClick={() => changeLanguage("no")}>
            <img
              src={no}
              alt="Norwegain Flag"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "8px",
                borderRadius: "50%",
              }}
            />
            Norwegian
          </p>
          <p onClick={() => changeLanguage("sv")}>
            <img
              src={se}
              alt="Swedish Flag"
              style={{
                width: "20px", // Adjust the width to your desired size
                height: "20px", // Adjust the height to your desired size
                marginRight: "8px",
                borderRadius: "50%",
                backgroundColor: "#F3F1ED",
              }}
            />
            Swedish
          </p>
        </div>
      )}
    </div>
  );
};
