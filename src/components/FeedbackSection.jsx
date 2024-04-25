import feedback from "../json/feedback.json";
import { FeedbackCarousel } from "./FeedbackCarousel.jsx";
import { FeedbackCard } from "./reusable/FeedbackCard.jsx";

export const FeedbackSection = () => {
  return (
    <div className="font-montserrat pt-20 border-t mb-20">
      <h2 className="text-2xl font-semibold mb-16 mx-8 text-center tablet:text-left tablet:mx-8 desktop:mx-32 desktop:mt-40">
        Feedback by Urban Spinners
      </h2>
      <FeedbackCarousel />
      <div className="hidden desktop:block desktop:flex desktop:mx-32 desktop:text-xl desktop:mb-40">
        {feedback.feedback.map(({ id, photo, text, sender, profession }) => (
          <FeedbackCard
            key={id}
            photo={photo}
            text={text}
            sender={sender}
            profession={profession}
          />
        ))}
      </div>
    </div>
  );
};
