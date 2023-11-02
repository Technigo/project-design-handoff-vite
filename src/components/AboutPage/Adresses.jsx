import React from 'react';
import AddressCard from './AddressCard';
import styled from 'styled-components';


const AddressesContainer = styled.div`
    background-color: #2A3439;
    padding: 50px;
    display: flex; 
    gap: 40px; // this is to give space between address cards if you have multiple
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; // this ensures the boxes wrap to the next line if there's no space
    color: black;
`;

function Adresses() {
    return (
        <AddressesContainer>
            <AddressCard 
                location="Grand Topal Hideaway"
                detail1="Beachside 1"
                detail2="Just outside Haven"
                region="Southern Grahtwood"
                world="Tamriel"
            />
            <AddressCard 
                location="Sanctuary"
                detail1="Plot 37, 5th Ward"
                detail2="Shirogane Hingashi"
                region="Eorzea"
                world="Twintania"
            />
        </AddressesContainer>
    );
}

export default Adresses;


