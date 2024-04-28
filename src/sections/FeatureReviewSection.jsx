import { useState, useEffect } from "react";

import { FeatureCard } from "../components/FeatureCard";
import { ReviewCard } from "../components/ReviewCard";

export const FeatureReviewSection = ({ featureData, reviewData }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 360);
    checkIfMobile();

    function handleResize() {
      checkIfMobile();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background-neon-green">
      <div className="max-w-screen-xl m-auto grid grid-cols-1 desktop:grid-cols-2">
        <div className="desktop:basis-2/3">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="flex flex-col tablet:flex-row desktop:flex-col desktop:basis-1/3 justify-center">
          {reviewData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
