import styled from 'styled-components';
import { infoArray } from './CardInfo';
import ButtonComponent from './SwishButton';
import { H2, P } from './Typography';
import GridContainer from './Grid';

const Card = styled.div`
  background: #FDF8F5;
  border-radius: 10px; 
  column-span: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; 
  padding: 32px 16px;
  margin: 0 16px;
`;

const CircleContainer = styled.div`
  width: 234px;
  height: 234px;
  background: #55A4A1;
  border-radius: 50%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
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
    <GridContainer>
      {infoArray.map(info => (
        <Card key={info.id}>
          <CircleContainer>
            <Image src={info.image} alt={info.title} />
          </CircleContainer>
          <H2>{info.title}</H2>
          <P>{info.text}</P>
          <ButtonComponent>{info.buttonText}</ButtonComponent>
        </Card>
      ))}
    </GridContainer>
  );
};

export default CardComponent;
