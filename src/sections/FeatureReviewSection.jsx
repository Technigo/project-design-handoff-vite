import {useState, useEffect} from "react"

import { FeatureCard } from "../components/FeatureCard";
import { ReviewCard } from "../components/ReviewCard";

export const FeatureReviewSection = ({ featureData, reviewData }) => {
  console.log("Feature data: ", featureData);
  console.log("Review data: ", reviewData);

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
