import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DropdownWrapper = styled.div`
  position: absolute;

  @media (min-width: 835px) {
    right: 10%;
  }
`

const DropdownUl = styled.ul`
  position: absolute;
  z-index: 2;
  transform: translateY(1em);
  transition: all 0.3s ease-in-out;
  list-style: none;
  padding: 10px;
  width: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0.6;
  background: #FFFFFF;
`
const DropdownLi = styled.li`
  display: block;
  text-align: left;
  color: #000000;
  font-size: 10px;
  font-weight: var(--text-weight-mobile);
  line-height: 12.11px;

  @media (min-width: 394px) {
    font-size: 15px;
    line-height: 18.17px;
  }

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    line-height: var(--text-height-mobile);
  }
`

export const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState({name: t("footer.languageSelector.language")});

  const handleLanguageSelect = (languageKey, languageCode) => {
    setSelectedLanguage({name: t(`footer.languageSelector.${languageKey}`)});
    i18n.changeLanguage(languageCode);
  }

  return (
    <DropdownWrapper>
      <DropdownUl>
        <DropdownLi onClick={() => handleLanguageSelect("english", "en")}>
            {t(`footer.languageSelector.english`)}
        </DropdownLi>
        <DropdownLi onClick={() => handleLanguageSelect("swedish", "se")}>
            {t(`footer.languageSelector.swedish`)}
        </DropdownLi>
      </DropdownUl>
    </DropdownWrapper>
  )
}
