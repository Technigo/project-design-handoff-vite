import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 60px;
  /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const LanguageButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownContainer>
      <StyledButton onClick={toggleDropdown}>
        <img src="/language-orange.svg" alt="Change to another language" />

        <DropdownContent open={dropdownOpen}>
          <a href="#" onClick={() => handleLanguageSelect("en")}>
            <img src="/flag-en.png" alt="English" />
          </a>
          <a href="#" onClick={() => handleLanguageSelect("no")}>
            <img src="/flag-no.png" alt="Norwegian" />
          </a>
          <a href="#" onClick={() => handleLanguageSelect("se")}>
            <img src="/flag-se.png" alt="Swedish" />
          </a>
          <a href="#" onClick={() => handleLanguageSelect("da")}>
            <img src="/flag-da.png" alt="Danish" />
          </a>
          <a href="#" onClick={() => handleLanguageSelect("pt")}>
            <img src="/flag-pt.png" alt="Portuguese" />
          </a>
          <a href="#" onClick={() => handleLanguageSelect("mk")}>
            <img src="/flag-mk.png" alt="Macedonian" />
          </a>
        </DropdownContent>
      </StyledButton>
    </DropdownContainer>
  );
};
