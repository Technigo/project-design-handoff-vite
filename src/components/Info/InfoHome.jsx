import styled from 'styled-components';
import { Description } from "../../reusableComponents/Description.jsx"

const InfoWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 10px; 
  max-width: 100%;
  padding: 5px 25px;
  @media (min-width: 1024px) {
  display: none;
  }
`;

const InfoWrapperDesktop = styled.div`
 display: none;
  @media (min-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr; 
  gap: 10px; 
  max-width: 100%;
  padding: 5px 25px;
  
  }
`;

const RedLine = styled.div`
  width: 100%; /* Line width to the entire width of the wrapper */
  height: 16px;
  background-color: var(--red-color);
`;
const InfoDescription = styled(Description)`
color: #333;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
letter-spacing: -0.308px;

@media (min-width:1024px){
color: #333;
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 24px */
letter-spacing: -0.528px;
padding:30px 200px;
}
`;
const StyledParagraph = styled.p`
  color: #333;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.308px;

  @media (min-width:1024px){
    color: #333;
font-family: Staatliches;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 100%;
letter-spacing: -0.88px;
  }
`;
const BlueLine = styled.div`
   width: 100%; /* Line width to the entire width of the wrapper */
  height: 15px;
  background-color: var(--blue-color);
`;

export const InfoHome = ({ mainText, text }) => {
  return (
    <>
      <InfoWrapperMobile>
        <RedLine className="red-line" />
        <InfoDescription className="info-description" text={mainText} />
        <StyledParagraph>{text}</StyledParagraph>
        <BlueLine className="blue-line" />
      </InfoWrapperMobile>

      <InfoWrapperDesktop>
        <RedLine className="red-line" />
        <InfoDescription className="info-description" text={mainText} />
        <BlueLine className="blue-line" />
        <StyledParagraph>{text}</StyledParagraph>

      </InfoWrapperDesktop>
    </>
  );
}


