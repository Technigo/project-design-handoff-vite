import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 10px; 
  max-width: 100%;
  padding: 5px 25px;

  @media (min-width: 667px) and (max-width: 1024px){
    
  }
  @media (min-width: 1025px) {

  }
`;
const RedLine = styled.div`
  width: 100%; /* Line width to the entire width of the wrapper */
  height: 16px;
  background-color: var(--red-color);
`;
const Details = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
@media (min-width: 667px) and (max-width: 1024px){
  padding: 0 150px;
}

@media (min-width: 1025px){
  padding: 0 150px;
}
`
const InfoDescription = styled.div`
display: flex;
flex-direction: column;
text-align:left;
gap:20px;

`
const EmailParagraph = styled.p`
color:var(--red-color);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align:left;
`
const AddressParagraph = styled.p`
color: #333;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
text-align:left;

`;
const PhoneParagraph = styled.p`
  color: #333;
  text-align: center;
  font-family: Inter;
  font-size:14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-align:left;
`;
const BlueLine = styled.div`
   width: 100%; /* Line width to the entire width of the wrapper */
  height: 15px;
  background-color: var(--blue-color);
`;
const InfoImage = styled.img`
width: 149px;
height: 137.5px;
@media (min-width: 667px) and (max-width: 1024px){
  width: 264px;
height: 217px;
}

@media (min-width: 1025px){
  width: 321px;
height: 241px;
}
`
export const AddressInfo = ({ address, phone, email, image }) => {
  return (
    <>
      <InfoWrapper>
        <RedLine className="red-line" />
        <Details>
          <InfoImage src={image} alt="Hero Image" />
          <InfoDescription>
            <AddressParagraph>{address}</AddressParagraph>
            <PhoneParagraph>{phone}</PhoneParagraph>
            <EmailParagraph>{email}</EmailParagraph>
          </InfoDescription>
        </Details>
        <BlueLine className="blue-line" />
      </InfoWrapper>
    </>
  );
};



