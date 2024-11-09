import styled from "styled-components";
import { H2, H3, TextP } from "../UI/Typography";
import { CardsButton1 } from "../UI/Button";
import { CardsButton2 } from "../UI/Button";
import { CardsButton3 } from "../UI/Button";





export const Cards = () => {
    return (
        <CardsContainer>
            <H3>Delta i våra samtalsgrupper</H3>


            <TextP>
                {`Genom att prata med andra - både online 
                och genom fysiska träffar - blir det enklare 
                att hantera det som är svårt. Våra 
                gruppledare har egen erfarenhet och alla 
                grupper är slutna.
                
                Delta i våra grupper eller starta en ny utifrån dina behov.
                `}
            </TextP>



            <CardsContent>
                <StyledImage src="/Images/card-image1.png" alt="Card Image 1" />
                <CardsButton1>Utmattning och stress</CardsButton1>

                <StyledImage src="/Images/card-image2.png" alt="Card Image 2" />
                <CardsButton2>Psykisk ohälsa - BTS</CardsButton2>

                <StyledImage src="/Images/card-image3.png" alt="Card Image 3" />
                <CardsButton3>Bröstcancer</CardsButton3>
            </CardsContent>


            {/*Link styled component */}
            <StyledLink href="https://example.com">
                Flera aktiva stödgrupper
            </StyledLink>

            <br />







        </CardsContainer>


    );
};




// Styled Components

/*Background style - colour*/
const CardsContainer = styled.div`
  background-color: #FFCAF8;
  
`;

/*Styling for the text link at the bottom*/
const StyledLink = styled.a`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
    text-decoration: underline;
    margin-left: 90px;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 40px;
    margin-top: 30px;
    display:flex;
    text-align: center;


    &:hover {
        text-decoration: none;
    }
`;


// Styled component for images
const StyledImage = styled.img`
    margin: 0 auto; /* Centers the image horizontally */
    padding: 0;
    display: block; /* Required for margin: auto to work */
`;




/*Card content styling */
const CardsContent = styled.div`
border-radius: var(--Radius-200, 8px) var(--Radius-200, 8px) 0px 0px;
    margin: 0;
    padding: 0;
`;


export default Cards;


