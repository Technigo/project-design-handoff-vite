import React, { useState } from 'react';
import styled from 'styled-components';
import UKFlag from '../assets/Country=UK.svg';
import SEFlag from '../assets/Country=SE.svg';
import { useTranslation } from 'react-i18next';

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
    font: 'Electrolize';
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
    margin-left: 8px;
    width: 24px;
    height: 24px;
`;


const LanguageSelectorComponent = () => {
    const { t, i18n } = useTranslation(); // Destructure t and i18n from the hook
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({name: t('languageSelector.language'), flag: null});

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (languageKey, flag, languageCode) => {
        setSelectedLanguage({name: t(`languageSelector.${languageKey}`), flag: flag});
        i18n.changeLanguage(languageCode); // Change the active language
        setIsOpen(false);
    }

    return (
        <LanguageDropdown>
            <LanguageSelector onClick={toggleDropdown}>
                {selectedLanguage.name}
                {selectedLanguage.flag && <FlagImage src={selectedLanguage.flag} alt={`${selectedLanguage.name} Flag`} />}
            </LanguageSelector>
            <DropdownContent $isOpen={isOpen}>
                <LanguageItem onClick={() => handleLanguageSelect('english', UKFlag, 'en')}>
                    {t('languageSelector.english')}
                    <FlagImage src={UKFlag} alt={t('languageSelector.english') + " Flag"} />
                </LanguageItem>
                <LanguageItem onClick={() => handleLanguageSelect('swedish', SEFlag, 'se')}>
                    {t('languageSelector.swedish')}
                    <FlagImage src={SEFlag} alt={t('languageSelector.swedish') + " Flag"} />
                </LanguageItem>
                {/* Add more language items with flags here */}
            </DropdownContent>
        </LanguageDropdown>
    );
};

export default LanguageSelectorComponent;