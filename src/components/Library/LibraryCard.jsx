/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Typography } from '../../ui/Typography';


const Card = styled.article`
  display: flex;
  width: 10rem;
  padding: 14px 14px 0;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #EEE7EB;
  box-shadow: 0px 4px 4px 0px rgba(54, 12, 37, 0.50);
  scroll-snap-align: start;
  cursor: pointer; 
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);   
  }
`;
// Zoom on hoover
// change in typography = p-size smaller and no margin-bottom


const CardImage = styled.img`
  width: 100%;
  height: auto;
`;



export const LibraryCard = ({ image, title, onClick }) => {

  return (
    <Card onClick={onClick}>
      <CardImage src={image} alt={title} />
      <Typography typography={title} level={6} />
    </Card>
  );
};