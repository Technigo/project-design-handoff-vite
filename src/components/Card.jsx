import styled from 'styled-components';

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
  background: url(${props => props.imagePath}), lightgray -62.422px 0px / 212.58% 100% no-repeat;
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
`;

export const Card = ({ imagePath, title, description, isLast}) => {
  return (
    <CardContainer>
        <InnerContainer>
            <Image imagePath={imagePath} />
            <TextContainer>
              <Title isLast={isLast}>{title}</Title>
              <Description>{description}</Description>
            </TextContainer>
        </InnerContainer>
    </CardContainer>
  )
}