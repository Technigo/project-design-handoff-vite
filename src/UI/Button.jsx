import React from "react";
import styled from "styled-components";

// Hero Button
export const HeroButton = styled.button`
    padding: 16px 24px;
    font-size: 16px;
    cursor: pointer;
    background-color: #FFEC92;
    border: none;
    font-weight: 700;
    font-family: Inter;
    border-radius: var(--Radius-200, 8px);
    align-items: center;
    margin-bottom: 45px;
    transition: background-color 0.3s; /

    &:hover {
        background-color: #EED025; /* Change color when hover */
        cursor: pointer; 
    }
`;

// Cards Button 
const CardsButtonBase = styled.button`
    padding: 10px 20px;
    width: 320px;
    font-size: 16px;
    cursor: pointer;
    background-color: #FFEC92;
    border: none;
    font-weight: 700;
    font-family: Inter;
    border-radius: 0px 0px var(--Radius-200, 8px) var(--Radius-200, 8px);
    margin: 0 auto 50px; 
    display: block; 
    transition: background-color 0.3s;

    &:hover {
        background-color: #EED025; /* Change color when hover */
        cursor: pointer; 
    }
`;

// Cards Buttons 
export const CardsButton1 = styled(CardsButtonBase)``;
export const CardsButton2 = styled(CardsButtonBase)``;
export const CardsButton3 = styled(CardsButtonBase)``;

// Button Component
const Button = () => {
    return (
        <div>
            <HeroButton>Hero Button</HeroButton>

            <CardsButton1>Cards Button 1</CardsButton1>

            <CardsButton2>Cards Button 2</CardsButton2>

            <CardsButton3>Cards Button 3</CardsButton3>
        </div>
    );
};

export default Button;
