import PropTypes from "prop-types";

import { FeatureCard } from "../components/FeatureCard";
import { ReviewCard } from "../components/ReviewCard";

export const FeatureReviewSection = ({ featureData, reviewData }) => {
  return (
    <div className="bg-background-neon-green">
      <div className="max-w-screen-xl m-auto flex">
        <div className="desktop:basis-7/12">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="flex flex-col tablet:flex-row desktop:flex-col desktop:basis-5/12 justify-center">
          {reviewData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

FeatureReviewSection.propTypes = {
  featureData: PropTypes.object.isRequired,
  reviewData: PropTypes.object.isRequired,
};