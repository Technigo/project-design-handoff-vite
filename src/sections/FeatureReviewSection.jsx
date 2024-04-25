import { FeatureCard } from "../components/FeatureCard";
import { ReviewCard } from "../components/ReviewCard";

export const FeatureReviewSection = ({ featureData, reviewData }) => {
  console.log("Feature data: ", featureData);
  console.log("Review data: ", reviewData);
  return (
    <div className="bg-background-neon-green py-6">
      {featureData.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
      {reviewData.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};
