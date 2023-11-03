import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button.jsx';
import PopUp from './PopUp';
import { useTranslation } from 'react-i18next';

const BigContainer = styled.div`
    width: 100%
    height: 50vh; // 
    background-color: #2C3539; // The gunmetal color
    display: flex;
    justify-content: center; // Horizontally center the child component
    align-items: center; // Vertically center the child component
`;

const ContactContainer = styled.div`
    background-color: #2C3539; // The gunmetal color
    color:  #D2FDFF;
    width: 246px; // Fixed width
    height: 260px; // Fixed height
    border-radius: 8px;
    display: flex;
    flex-direction: column; // To align the children vertically
    justify-content: space-between; // To ensure there's a gap between items
    text-align: center; // To center the text

    h2 {
        font-size: 32px;
        margin-bottom: 0.5rem;
        font-family: 'Montserrat Subrayada';
        text-decoration: underline;
        margin-bottom:0px; 
    }


    p {
        font-family: 'Electrolize';
        margin-bottom:5px; 
        font-size: 16px;
    }
`;

function ContactPrompt() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { t } = useTranslation(); // Initialize the translation hook

    const toggleModal = () => {
        setIsModalVisible(prev => !prev);
    }

    return (
        <BigContainer>
            <ContactContainer>
                {/* Use the `t` function to get translated text */}
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.description')}</p>
                <Button onClick={toggleModal}>{t('contact.button')}</Button>
            </ContactContainer>
            {isModalVisible && <PopUp onClose={toggleModal} />}
        </BigContainer>
    );
}

export default ContactPrompt;



