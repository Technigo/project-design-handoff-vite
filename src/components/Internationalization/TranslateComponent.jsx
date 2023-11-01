import { useTranslation } from "react-i18next";

export const TranslateComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="internationalization-wrapper">
      <button onClick={() => changeLanguage("en")}>English</button>
      <br />
      <button onClick={() => changeLanguage("se")}>Svenska</button>
    </div>
  );
};
