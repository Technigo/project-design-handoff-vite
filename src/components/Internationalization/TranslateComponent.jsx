import { useTranslation } from "react-i18next";

export const TranslateComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
  };

  const englishFunc = () => changeLanguageFunc("en");
  const swedishFunc = () => changeLanguageFunc("se");

  return (
    <>
      <div className="internationalization-wrapper">
        <button onClick={englishFunc}>English</button>
        <button onClick={swedishFunc}>Swedish</button>
      </div>
    </>
  );
};
