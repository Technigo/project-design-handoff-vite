import i18next from "i18next";

i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        key: "hello world",
      },
    },
  },
});

console.log(i18next.t("key"));
