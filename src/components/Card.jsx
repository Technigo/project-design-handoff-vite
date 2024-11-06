import styled from 'styled-components';
import { infoArray } from './CardInfo';
import ButtonComponent from './SwishButton';

const CardContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 32px; 
  @media (max-width: 768px) {
    gap: 24px;
    padding: 16px;
  }
`;

const InfoContainer = styled.div`
  background: white; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; 
  padding: 16px;
  background: #FDF8F5;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

const CircleContainer = styled.div`
  width: 234px;
  height: 234px;
  background: #55A4A1;
  border-radius: 50%;
  display: flex; 
  justify-content: center; 
  align-items: center; 

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const CategoryText = styled.div`
  height: 32px;
  text-align: center;
  color: #545F71;
  font-size: 24px;
  font-family: "Cabin", sans-serif;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DescriptionText = styled.div`
  height: auto;
  text-align: center;
  color: #545F71;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Image = styled.img`
  width: 40%; 
  height: auto; 

  @media (max-width: 768px) {
    width: 50%;
  }
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
          <ButtonComponent>{info.buttonText}</ButtonComponent>
        </InfoContainer>
      ))}
    </CardContainer>
  );
};

export default CardComponent;
