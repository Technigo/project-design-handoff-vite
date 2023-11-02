import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button.jsx';
import PopUp from './PopUp';

const BigContainer = styled.div`
    width: 100vw; // 100% of the viewport width
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
        font: 'Montserrat Subrayada';
        text-decoration: underline;
        margin-bottom:0px; 
    }


    p {
        font: 'Electrolize';
        margin-bottom:5px; 
        font-size: 16px;
    }
`;

function ContactPrompt() {
    // New state to manage modal visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalVisible(prev => !prev);
    }

    return (
        <BigContainer>
            <ContactContainer>
                <h2>WOULD YOU LIKE TO CONTACT US?</h2>
                <p>We probably won't answer. We need lots of Naps on Laps, but you are welcome to try any time you like.</p>
                <Button onClick={toggleModal}>CONTACT US</Button>
            </ContactContainer>
            {/* Render the PopUp modal if isModalVisible is true */}
            {isModalVisible && <PopUp onClose={toggleModal} />}
        </BigContainer>
    );
}

export default ContactPrompt;




