import { useTranslation } from "react-i18next";
import { LanguageButtonEN } from "./LanguageButtonEN";
import { LanguageButtonSE } from "./LanguageButtonSE";
import styled from "styled-components";

const StyledLanguages = styled.div`
  display: flex;
  gap: 16px;
`;

export const Translation = () => {
  const { i18n } = useTranslation();

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
    <>
      <StyledLanguages>
        <LanguageButtonEN onClick={handleLanguageChangeEN} />
        <LanguageButtonSE onClick={handleLanguageChangeSE} />
      </StyledLanguages>
    </>
  );
};
