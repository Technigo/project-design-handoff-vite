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
const Details = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
const Address = styled.div`
display: grid;
grid-template-rows: 3fr;
`
const EmailParagraph = styled.p`
color:var(--red-color);
font-size: 14px;
font-weight: 800;
`
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
const InfoImage = styled.img`
max-width:100%;
`
export const InfoInformation = ({ mainText, phone, email, image }) => {
  return (
    <>
      <InfoWrapper>
        <RedLine className="red-line" />
        <Details>
          <InfoImage src={image} alt="Hero Image" />
          <Address>
            <InfoDescription className="info-description" text={mainText} />
            <StyledParagraph> {phone}</StyledParagraph>
            <EmailParagraph> {email}</EmailParagraph>
          </Address>
        </Details>
        <BlueLine className="blue-line" />
      </InfoWrapper>
    </>
  );
};


