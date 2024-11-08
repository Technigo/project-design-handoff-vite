// Welcome.jsx
import React from "react";
import styled from "styled-components";
import { TextP, H1 } from "../UI/Typography";


export const Welcome = () => {
    return (
        <Container>
            <H1>
                Välkommen till <br /> Kindness & <br /> Compassion
            </H1>

            <TextP>
                {`Kindness & Compassion är en rörelse med visionen att skapa ett vänligare samhälle.
                
                Vi skapar mötesplatser och inspirerar till goda handlingar.

                Vårt mål är att bygga broar mellan människor och sprida vänlighet. Genom samtalsgrupper och enkla vardagliga handlingar kan vi göra skillnad.

                Ingen kan göra allt, men alla kan göra något. Tillsammans skapar vi en mer inkluderande värld.`}
            </TextP>

            {/* Styled link component */}
            <StyledLink href="https://example.com">
                Var med och gör skillnad
            </StyledLink>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
padding:16px;
`;

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

export default Welcome;
