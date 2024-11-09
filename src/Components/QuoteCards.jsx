import { useState } from 'react';
import styled from 'styled-components';
import { Quotes, Author, QuoteIcon } from "../UI/Typography";

const quotesData = [
    { id: 1, quote: "Det kändes så mycket bättre att inse att jag inte var ensam om de tankarna.", author: "Sandra, deltagare i bröstcancergruppen" },
    { id: 2, quote: "Att vara en del av denna grupp har hjälpt mig att hitta stöd och gemenskap.", author: "Mikael, deltagare i samtalsgruppen" },
    { id: 3, quote: "Jag uppskattar varje möte och alla fantastiska människor jag får träffa.", author: "Emma, deltagare i vänskapsgruppen" },
    { id: 4, quote: "Det är en trygg plats där jag kan dela mina tankar utan att känna mig dömd.", author: "Johanna, deltagare i stödgruppen" }
];

export const QuoteCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleRadioChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <QuoteCardContainer>
            <CardsContainer activeIndex={activeIndex}>
                {quotesData.map((card) => (
                    <Card key={card.id}>
                        <QuoteIcon>“</QuoteIcon>
                        <Quotes>{card.quote}</Quotes>
                        <Author>- {card.author}</Author>
                    </Card>
                ))}
            </CardsContainer>

            <RadioButtons>
                {quotesData.map((_, index) => (
                    <label key={index}>
                        <RadioButton
                            type="radio"
                            name="quote-selector"
                            checked={activeIndex === index}
                            onChange={() => handleRadioChange(index)}
                        />
                    </label>
                ))}
            </RadioButtons>

            <DashedLine /> {/* Add the dashed line here */}

        </QuoteCardContainer>
    );
};

// Styled Components
const QuoteCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin-top: 32px;
`;

const CardsContainer = styled.div`
    display: flex;
    width: 320px;  /* Adjusted to show more of the second card */
    height: 278px; /* Fixed height for consistent layout */

    /* Apply translation based on activeIndex and full card width */
    transform: ${({ activeIndex }) => `translateX(-${activeIndex * 220}px)`}; 
    transition: transform 0.5s ease;
`;

const Card = styled.div`
    width: 220px; 
    height: 278px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    background-color: #C1F0EF;
    margin-right: 20px; 
`;

const RadioButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 32px;
    margin-bottom: 32px;

`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
appearance: none;
width: 16px;
height: 16px;
border: 1px solid #F77AE7;
border-radius: 50%;
cursor: pointer;
outline: none;
transition: border-color 0.3s ease, background-color 0.3s ease;

&:hover {
    border-color: #D9D9D9;
}

&:checked {
    background-color: #D9D9D9; 
}
`;

const DashedLine = styled.div`
    width: 270px;
    border-top: 2px dashed #333;
    margin: 20px 0; 
`;

export default QuoteCards;
