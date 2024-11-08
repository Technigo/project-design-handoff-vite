/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BodyTextSmall } from "./Typography"

const ReviewContainer = styled.div `
  padding: ${({ theme }) => theme.spacing.xsmall};
  width: 350px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  overflow-x: scroll; 
  scroll-snap-type: x mandatory;
`;

const RatingContainer = styled.div `
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxsmall};
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

const SnapBox = styled.div `
  flex: 0 0 auto; 
  scroll-snap-align: start; 
`;

export const ReviewCard = ({ rating, name, subject, review, date, country }) => {

  const starIcons = [];
  const numStars = 4;

  for (let i = 0; i < numStars; i++) {
    starIcons.push(<StarIcon key={i} src={rating} alt="star" />);
  }

  return (
    <ReviewContainer >
    <SnapBox> 
    <RatingContainer>
    {starIcons}    
    <BodyTextSmall>{name}</BodyTextSmall>
    </RatingContainer>
    <div> 
    <SubjectText>{subject}</SubjectText>
    <BodyTextSmall>{review}</BodyTextSmall>
    </div>
    <DateContainer>
    <BodyTextSmall>{date}</BodyTextSmall>
    <BodyTextSmall>{country}</BodyTextSmall>  
    </DateContainer>
    </SnapBox>
    </ReviewContainer> 
    );
};
