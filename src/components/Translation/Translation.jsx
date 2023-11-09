import { useTranslation } from "react-i18next";
import { LanguageButtonEN } from "./LanguageButtonEN";
import { LanguageButtonSE } from "./LanguageButtonSE";
import styled from "styled-components";

// Create a styled component for the container of language buttons
const StyledLanguages = styled.div`
  display: flex;
  gap: 16px;
`;

export const Translation = () => {
  const { i18n } = useTranslation(); // Initialize i18n to access translation functions

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // Function to change the language when the English button is clicked
  const handleLanguageChangeEN = () => {
    changeLanguage("en"); // Call changeLanguage with the "en" (English) language code
  };

  // Function to change the language when the Swedish button is clicked
  const handleLanguageChangeSE = () => {
    changeLanguage("se"); // Call changeLanguage with the "se" (Swedish) language code
  };

  return (
    <>
      <StyledLanguages>
        {/* Render the English language button with a click handler */}
        <LanguageButtonEN onClick={handleLanguageChangeEN} />{" "}
        {/* Render the Swedish language button with a click handler */}
        <LanguageButtonSE onClick={handleLanguageChangeSE} />
      </StyledLanguages>
    </>
  );
};
