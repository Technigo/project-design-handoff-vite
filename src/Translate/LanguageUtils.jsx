import i18n from "./i18next";

export const changeLanguage = (language) => {
  console.log("Changing language to:", language);
  i18n.changeLanguage(language);
};
