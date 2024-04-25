import { useState } from "react";
import feedback from "../json/feedback.json";
import { FeedbackCard } from "./reusable/FeedbackCard.jsx";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const FeedbackCarousel = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === feedback.feedback.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? feedback.feedback.length - 1 : slide - 1);
  };

  return (
    <div className="relative">
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-black left-4 cursor-pointer m-auto"
        onClick={prevSlide}
      />
      {feedback.feedback.map(
        ({ id, photo, text, sender, profession }, index) => {
          return (
            <FeedbackCard
              currentCard={slide === index}
              key={id}
              photo={photo}
              text={text}
              sender={sender}
              profession={profession}
            />
          );
        }
      )}
      <BsArrowRightCircleFill
        className="absolute w-8 h-8 text-black right-4 cursor-pointer m-auto"
        onClick={nextSlide}
      />

      <span className="flex absolute bottom-4 m-auto">
        {feedback.feedback.map((_, index) => {
          return (
            <button
              className="bg-off-black w-2 h-2 rounded-full border-none outline-none mx-1 cursor-pointer"
              key={index}
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
