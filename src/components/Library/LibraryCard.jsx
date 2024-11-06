import styled from 'styled-components';


const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8e7f3;
  border-radius: 16px;
  padding: 16px;
  min-width: 150px;
  scroll-snap-align: start;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer; 
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* Lätt "zoom"-effekt vid hover */
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const CardTitle = styled.p`
  text-align: center;
  font-size: 0.9em;
`;


export const LibraryCard = ({ image, title, onClick }) => {
    return (
        <Card onClick={onClick}>
          <CardImage src={image} alt={title} />
          <CardTitle>{title}</CardTitle>
        </Card>
    );
};