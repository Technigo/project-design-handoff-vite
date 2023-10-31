import styled from 'styled-components';
import { Description } from "../../reusableComponents/Description.jsx"

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 10px; 
  max-width: 100%;
  padding: 5px 25px;
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
`;
const BlueLine = styled.div`
   width: 100%; /* Line width to the entire width of the wrapper */
  height: 15px;
  background-color: var(--blue-color);
`;
export const Info = ()  =>{

  const MainText = "You have put in the hours, you have put in the sweat. You are already a relentless competitor. You have strength, explosivity, speed and balance - but we will help you gain more. Are you a serious hockey player ready to take your game to the next level?"

  const Text = "Click below to see more about what we do for our athletes: "

  return (
    <>
      <InfoWrapper>
      <RedLine className="red-line" /> {/* blue line */}
      <InfoDescription className="info-description" text={MainText} /> 
      <StyledParagraph>{ Text } </StyledParagraph> 
        <BlueLine className="blue-line" /> {/* red line */}
        </InfoWrapper>
      </>
  )
}

