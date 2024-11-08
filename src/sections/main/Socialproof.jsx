import styled from "styled-components";
import reviewsData from "../../data/reviews.json";
import { ReviewCard } from "../../re-components/ReviewCard";

const ScrollContainer = styled.div `
  display: flex;
  overflow-x: auto; 
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    /* height: 8px;  */
  }
`;

export const SocialProof = () => {
  return (
    <>
    <ScrollContainer>
      {reviewsData.reviews.map((review) => (
        <ReviewCard
          key={review.id} 
          rating={review.rating}
          name={review.name}
          subject={review.subject}
          review={review.review}
          date={review.date}
          country={review.country}
        />
      ))}
      </ScrollContainer>
    </>
  );
};