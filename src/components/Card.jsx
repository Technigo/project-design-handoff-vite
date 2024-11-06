// Card.jsx

import styled from "styled-components"
import { CardP } from "../UI/Typography";


const CardStyle = styled.div`
display: flex;
width: 148px;
height: 201px;
padding: 8px 14px 10px 14px;
flex-direction: column;
align-items: center;
gap: 8px;
flex-shrink: 0;
border-radius: 16px;
background: #EEE7EB;
box-shadow: 0px 4px 4px 0px rgba(54, 12, 37, 0.50);
`;

const CardImage = styled.img`
  height: 133px;
align-self: stretch;
`;

export const Card = ({ cardImage, cardText }) => {
  return (
    <CardStyle>
      <CardImage
        src={cardImage}
        alt="card-image"
      />
      <CardP>{cardText}</CardP>
    </CardStyle>
  );
};
