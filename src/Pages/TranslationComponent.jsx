import { useTranslation } from "react-i18next";

export const TranslationComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("text")}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("sv")}>swedish</button>
    </div>
  );
};
