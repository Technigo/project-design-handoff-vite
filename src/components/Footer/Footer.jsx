import styled from "styled-components";
import { Typography6, Typography7 } from "../../ui/Typography";



const FooterSection = styled.footer`
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0.5rem;
    background: #111010; 
    width: 100%;

    @media (min-width: 768px) {
        height: 4.5rem;
    }
    @media (min-width: 1200px) {
        height: 8.213rem;
    }


`;

const InfoSec = styled.section `
    width: 70%;
`;

const AboutSec = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: end;
    width: 30%;
`;

export const Footer = () => {

    return (
            <FooterSection>
                <InfoSec>
                    <Typography6 isWhite={true} isCentered={true}>The creator of these formulas is not responsible for any damage that may occur during use.</Typography6>
                </InfoSec>

                <AboutSec>
                    <Typography7 isWhite={true} noItalic={true}>Terms of Use</Typography7>
                    <Typography7 isWhite={true} noItalic={true}>About Daily Spells</Typography7>
                </AboutSec>
            </FooterSection>
    );
};