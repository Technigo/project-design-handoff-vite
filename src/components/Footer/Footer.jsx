import styled from "styled-components";
import { Typography6 } from "../../ui/Typography";



const FooterSection = styled.footer`
display: flex;
align-items: center;
gap: 0;
padding: 0.5rem;
background: #111010; 
width: 100%;
height: 8.213rem;

`;

const InfoSec = styled.section `
    width: 70%;
`;

const AboutSec = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30%;
`;

export const Footer = () => {

    return (
            <FooterSection>
                <InfoSec>
                    <Typography6 isWhite={true} isCentered={true}>The creator of these formulas is not responsible for any damage that may occur during use.</Typography6>
                </InfoSec>

                <AboutSec>
                    <Typography6 isWhite={true} noItalic={true}>Terms of Use</Typography6>
                    <Typography6 isWhite={true} noItalic={true}>About Daily Spells</Typography6>
                </AboutSec>
            </FooterSection>
    );
};