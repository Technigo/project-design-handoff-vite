import i18n from "i18next"; // Import the i18next library for internationalization.
import { initReactI18next } from "react-i18next"; // Import initReactI18next for initializing i18next.
import enTranslation from "../src/components/Translation/en.json" // Import English language translation data.
import seTranslation from "../src/components/Translation/se.json" // Import Swedish language translation data.

// Define language resources for internationalization.
const resources = {
  en: {
    translation: enTranslation, // English translations are stored in enTranslation.
  },
  se: {
    translation: seTranslation, // Swedish translations are stored in seTranslation.
  },
};

// Initialize i18n with configuration options.
i18n.use(initReactI18next).init({
  resources, // Provide the language resources defined earlier.
  lng: "en", // Set the default language to English.
  interpolation: {
    escapeValue: false, // Configure interpolation settings.
  },
  fallbackLng: "en", // Set a fallback language in case the selected language is not available.
});

export default i18n; // Export the configured i18n instance for use in the application.
