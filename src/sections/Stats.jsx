import { useState } from "react";

export const Stats = () => {
  const [text, setText] = useState("");

  const changeText = (newText) => {
    setText("");
  };

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

  /*import { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file where you define the animation

const AnimatedText = () => {
  const texts = ['Text 1', 'Text 2', 'Text 3'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through the texts with animation
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg font-bold text-center animate-slide-fade">{texts[currentIndex]}</p>
  );
}; */

  return (
    <>
      <p className="animate-textRoll"></p>
      {/*statContent.map((stat, index) => (
        <div key={index}>
          <h1>{stat.number}</h1>
          <h2>{stat.heading}</h2>
          <p>{stat.text}</p>
        </div>
      ))*/}
    </>
  );
};
