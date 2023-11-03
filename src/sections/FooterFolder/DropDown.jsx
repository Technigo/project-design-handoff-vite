import { useState } from "react";
import { useTranslation } from "react-i18next";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div>
          <p onClick={() => changeLanguage("en")}>{t("language.english")}</p>
          <p onClick={() => changeLanguage("no")}>{t("language.norwegian")}</p>
          <p onClick={() => changeLanguage("sv")}>{t("language.swedish")}</p>
        </div>
      )}
    </div>
  );
};
