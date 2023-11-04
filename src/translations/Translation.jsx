import styled from "styled-components";
import { useTranslation } from "react-i18next";

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

  const handleLanguageChangeNO = () => {
    changeLanguage("no");
  };

  const handleLanguageChangeDA = () => {
    changeLanguage("da");
  };

  const handleLanguageChangeMK = () => {
    changeLanguage("mk");
  };

  const handleLanguageChangePT = () => {
    changeLanguage("pt");
  };
  return (
    <>
      <StyledLanguages>
        <LanguageButtonEN onClick={handleLanguageChangeEN} />
        <LanguageButtonSE onClick={handleLanguageChangeSE} />
        <LanguageButtonSE onClick={handleLanguageChangeNO} />
        <LanguageButtonSE onClick={handleLanguageChangeDA} />
        <LanguageButtonSE onClick={handleLanguageChangeMK} />
        <LanguageButtonSE onClick={handleLanguageChangePT} />
      </StyledLanguages>
    </>
  );
};
