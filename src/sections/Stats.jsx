import { useEffect, useState } from "react";
import { StatCard } from "../components/StatCard";

export const Stats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const statContent = [
    {
      number: "2650",
      heading: "Trees Planted",
      text: "A tree will be planted in your name if you choose to stay with us for 5 days or longer",
    },
    {
      number: "+3200",
      heading: "Happy Retreaters",
      text: "Guests who have reported a major difference in the quality of day-to-day life before and after their stay",
    },
    {
      number: "+2K",
      heading: "Kg of Annual Food Grown",
      text: "From your labour to your table! You are welcome to participate in planting and harvesting with us",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statContent.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [statContent.length]);

  return (
    <section className="m-0 w-screen bg-yellow px-8 py-16 md:px-16 lg:px-32 lg:py-24">
      <StatCard stat={statContent[currentIndex]} />
    </section>
  );
};
