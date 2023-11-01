import React, { useState } from 'react';
import styled from 'styled-components';
import UKFlag from '../assets/Country=UK.svg';
import SEFlag from '../assets/Country=SE.svg';

const LanguageDropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const LanguageSelector = styled.button`
    background: none;
    border: none;
    color: #2A3439;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const DropdownContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: ${props => (props.$isOpen ? 'block' : 'none')}; // Note the change here
`;


const LanguageItem = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0; // Add a background color on hover
    }
`;

const FlagImage = styled.img`
    margin-right: 8px;
    width: 24px;
    height: 24px;
`;



const LanguageSelectorComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({name: 'Language', flag: null});

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language, flag) => {
        setSelectedLanguage({name: language, flag: flag});
        setIsOpen(false);
    }

    return (
        <LanguageDropdown>
            <LanguageSelector onClick={toggleDropdown}>
                {selectedLanguage.flag && <FlagImage src={selectedLanguage.flag} alt={`${selectedLanguage.name} Flag`} />}
                {selectedLanguage.name}
            </LanguageSelector>
            <DropdownContent $isOpen={isOpen}>
                <LanguageItem onClick={() => handleLanguageSelect('Language', UKFlag)}>
                    <FlagImage src={UKFlag} alt="UK Flag" />
                    English
                </LanguageItem>
                <LanguageItem onClick={() => handleLanguageSelect('Language', SEFlag)}>
                    <FlagImage src={SEFlag} alt="SE Flag" />
                    Swedish
                </LanguageItem>
                {/* Add more language items with flags here */}
            </DropdownContent>
        </LanguageDropdown>
    );
};

export default LanguageSelectorComponent;