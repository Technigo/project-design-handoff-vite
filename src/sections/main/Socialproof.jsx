import reviewsData from "../../data/reviews.json";
import { ReviewCard } from "../../re-components/ReviewCard";

export const SocialProof = () => {
  return (
    <>
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
    </>
  );
};