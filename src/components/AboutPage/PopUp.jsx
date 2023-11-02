import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button.jsx';
import { useTranslation } from 'react-i18next';


const PopUpContainer = styled.div`
    width: 270px;
    height: 270px;
    background-color: #2A3439; // Gunmetal color
    border-radius: 40px;
    border: 5px solid #26FFE6; // Fluorescent blue color
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 20px 50px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: 20px;
    background-color: white // Fluorescent blue color
    color: #2A3439; // Gunmetal color
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    &::placeholder {
        color: #2A3439; // Gunmetal color
        opacity: 0.8;
    }
    &:focus {
        outline: none;
    }
`;


const StyledParagraph = styled.p`
    color: #26FFE6; // Fluorescent blue color
    font-weight: bold;
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: white;
    font-size: 14px:
`;
const StyledParagraph1 = styled.p`
    color: #26FFE6; // Fluorescent blue color
    font-weight: bold;
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: white;
    font-size: 24px;
`;
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); // This will create a semi-transparent dark background
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; // Ensures the modal is above all other content
`;
function PopUp({ onClose }) {
    const { t } = useTranslation(); 
    const [stage, setStage] = useState(0);

    const handleNext = () => {
        if (stage < 3) {
            setStage(prevStage => prevStage + 1);
        } else {
            onClose();
        }
    };

    const renderStage = () => {
        const currentStage = `modal.stage${stage}`; // Constructing the path based on the current stage value

        switch (stage) {
            case 0:
                return (
                    <>
                        <StyledParagraph>{t(`${currentStage}.message`)}</StyledParagraph>
                        <StyledInput placeholder={t(`${currentStage}.placeholder`)} />
                        <Button onClick={handleNext}>{t(`${currentStage}.button`)}</Button>
                    </>
                );
            case 1:
                return (
                    <>
                        <StyledParagraph>{t(`${currentStage}.message`)}</StyledParagraph>
                        <StyledInput placeholder={t(`${currentStage}.placeholder`)} />
                        <Button onClick={handleNext}>{t(`${currentStage}.button`)}</Button>
                        <StyledParagraph>{t(`${currentStage}.description`)}</StyledParagraph>
                    </>
                );
            case 2:
                return (
                    <>
                        <StyledParagraph>{t(`${currentStage}.message`)}</StyledParagraph>
                        <StyledInput placeholder={t(`${currentStage}.placeholder`)} as="textarea" />
                        <Button onClick={handleNext}>{t(`${currentStage}.button`)}</Button>
                    </>
                );
            case 3:
                return (
                    <>
                        <StyledParagraph1>{t(`${currentStage}.message`)}</StyledParagraph1>
                        <Button onClick={onClose}>{t(`${currentStage}.button`)}</Button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <PopUpContainer onClick={(e) => e.stopPropagation()}>
                {renderStage()}
            </PopUpContainer>
        </ModalOverlay>
    );
}

export default PopUp;
