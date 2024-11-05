import styled from 'styled-components';
import { infoArray } from './CardInfo';
import StyledButton from './SwishButton';

const CardContainer = styled.div`
  background: gray;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 32px; 
`;

const InfoContainer = styled.div`
  background: white; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; 
  padding: 16px; /* Optional padding for spacing */
`;

const CircleContainer = styled.div`
  width: 234px;
  height: 234px;
  background: #55A4A1;
  border-radius: 117px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const CategoryText = styled.div`
  height: 32px;
  text-align: center;
  color: #545F71;
  font-size: 24px;
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
`;

const DescriptionText = styled.div`
  height: 118px;
  text-align: center;
  color: #545F71;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28px;
  word-wrap: break-word;
`;

const Image = styled.img`
  width: 40%; 
  height: auto; 
`;

const CardComponent = () => {
  return (
    <CardContainer>
      {infoArray.map(info => (
        <InfoContainer key={info.id}>
          <CircleContainer>
            <Image src={info.image} alt={info.title} />
          </CircleContainer>
          <CategoryText>{info.title}</CategoryText>
          <DescriptionText>{info.text}</DescriptionText>
          <StyledButton>{info.buttonText}</StyledButton>
        </InfoContainer>
      ))}
    </CardContainer>
  );
};

export default CardComponent;
