/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BodyTextSmall } from "./Typography"

const ReviewContainer = styled.div `
  padding: ${({ theme }) => theme.spacing.xsmall};
  height: 13.75rem;
  display: flex;
  flex: 0 0 21.875rem; 
  flex-direction: column;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  scroll-snap-align: start; //for the snapscroll
`;

const RatingContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

const ReviewText = styled.div `

`;

const StarIcon = styled.img`
  width: 8.323px;
  height: 7.925px;
`;

const DateContainer = styled.div `
display: flex;
flex-direction: row;
color: lightgray;
`;

const SubjectText = styled(BodyTextSmall)`
font-weight: 700;
`;


export const ReviewCard = ({ rating, name, subject, review, date, country }) => {

  const starIcons = [];
  const numStars = 4;

  for (let i = 0; i < numStars; i++) {
    starIcons.push(<StarIcon key={i} src={rating} alt="star" />);
  }

  return (
    <ReviewContainer >
    <RatingContainer>
    {starIcons}    
    <BodyTextSmall>{name}</BodyTextSmall>
    </RatingContainer>
    <ReviewText> 
    <SubjectText>{subject}</SubjectText>
    <BodyTextSmall>{review}</BodyTextSmall>
    </ReviewText>
    <DateContainer>
    <BodyTextSmall>{date}</BodyTextSmall>
    <BodyTextSmall>{country}</BodyTextSmall>  
    </DateContainer>
    </ReviewContainer> 
    );
};
