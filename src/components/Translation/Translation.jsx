import { useTranslation } from "react-i18next";
import { LanguageButtonEN } from "./LanguageButtonEN";
import { LanguageButtonSV } from "./LanguageButtonSV";

export const Translation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChangeEN = () => {
    changeLanguage("en");
  };

  const handleLanguageChangeSV = () => {
    changeLanguage("sv");
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("text")}</p>
      <LanguageButtonEN onClick={handleLanguageChangeEN} />
      <LanguageButtonSV onClick={handleLanguageChangeSV} />
    </div>
  );
};
