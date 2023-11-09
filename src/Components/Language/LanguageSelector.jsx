import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LanguageDropdownFooter } from "./LanguageDropdownFooter";

const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
  color: #000000;
  font-family: var(--font);
  font-size: 10px;
  font-weight: var(--text-weight-mobile);
  line-height: 12.11px;
  cursor: pointer;

  @media (min-width: 394px) {
    font-size: 15px;
    line-height: 18.17px;
  }

  @media (min-width: 835px) {
    font-size: var(--text-size-mobile);
    line-height: var(--text-height-mobile);
  }
`

export const LanguageSelector = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };
    
  return (
    <div>
      <div>
        <Button type="button" onClick={toggleDropdown}>{t(`footer.languageSelector.language`)}</Button>
      </div>
      {isVisible && <LanguageDropdownFooter />}
    </div>
  )
}
