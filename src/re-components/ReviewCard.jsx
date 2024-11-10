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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  flex: 0 0 18.75rem; 
  }
`;

const RatingContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  align-items: center;
`;

const ReviewText = styled.div `

`;

const StarContainer = styled.div`
display: flex;
flex-direction: row;
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
  const numStars = 5;

  for (let i = 0; i < numStars; i++) {
    starIcons.push(<StarIcon key={i} src={rating} alt="star" />);
  }

  return (
    <ReviewContainer >
    <RatingContainer>
      <StarContainer>
      {starIcons}       
      </StarContainer>
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
