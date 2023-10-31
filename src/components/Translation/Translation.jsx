import { useTranslation } from "react-i18next";
import { LanguageButtonEN } from "./LanguageButtonEN";
import { LanguageButtonSE } from "./LanguageButtonSE";

export const Translation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChangeEN = () => {
    changeLanguage("en");
  };

  const handleLanguageChangeSE = () => {
    changeLanguage("se");
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("text")}</p>
      <LanguageButtonEN onClick={handleLanguageChangeEN} />
      <LanguageButtonSE onClick={handleLanguageChangeSE} />
    </div>
  );
};
