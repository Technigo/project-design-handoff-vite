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
    <>
      <div>
        <BsArrowLeftCircleFill onClick={prevSlide} />
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
        <BsArrowRightCircleFill onClick={nextSlide} />
      </div>
      <span>
        {feedback.feedback.map((_, index) => {
          return (
            <button key={index} onClick={() => setSlide(index)}>
              Button
            </button>
          );
        })}
      </span>
    </>
  );
};
