import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";
import styled from "styled-components";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;
  `;

  const StyledButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    background: none;
    border: none;
    color: var(--cobalt);
    font-size: 1rem;
    cursor: pointer;
  `;

  const StyledMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    display: ${isOpen ? "block" : "none"};
    background-color: rgba(255, 255, 255, 0.7); /* Initially transparent */

    z-index: 1;
  `;

  const StyledOption = styled.div`
    border: 1px solid var(--cobalt);
    padding: 0.4rem;
    cursor: pointer;
    transition: ease 0.3s;

    &:hover {
      background: var(--cobalt);
      color: #fff;
    }
  `;

  return (
    <StyledDropdown>
      <StyledButton onClick={toggleDropdown}>
        {selectedLanguage === "en" ? "ENG" : "SVE"}
        <RiArrowDownSLine className="icon" />
      </StyledButton>
      <StyledMenu>
        <StyledOption onClick={() => handleLanguageChange("en")}>
          English
        </StyledOption>
        <StyledOption onClick={() => handleLanguageChange("se")}>
          Svenska
        </StyledOption>
      </StyledMenu>
    </StyledDropdown>
  );
};
