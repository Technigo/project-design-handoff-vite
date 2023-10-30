import styled from 'styled-components';
import Rectangle30 from '../assets/Rectangle30.png';

const CardContainer = styled.div`
  display: flex;
  margin: 8px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;  // Adds 8px space between image and text content  
`;

const Image = styled.div`
  height: 220px;
  flex: 1 0 0;
  border-radius: 8px;
  background: url(${props => props.image}) no-repeat center/cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  color: #000;
  font-family: Staatliches;
  font-size: ${props => props.isLast ? '18px' : '28px'};
  font-style: normal;
  font-weight: 400;
  line-height: ${props => props.isLast ? '24px' : 'normal'};
  align-self: stretch;
`;

const Description = styled.div`
  align-self: stretch;
  color: #000;
  font-family: Arsenal;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`;

export const Card = ({ title, description, isLast}) => {
  return (
    <CardContainer>
        <InnerContainer>
            <Image image={Rectangle30} />
            <TextContainer>
              <Title isLast={isLast}>{title}</Title>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
            </TextContainer>
        </InnerContainer>
    </CardContainer>
  )
}