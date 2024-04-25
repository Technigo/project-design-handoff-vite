import feedback from "../json/feedback.json"
import { FeedbackCard } from "./reusable/FeedbackCard.jsx"

export const FeedbackSection = () => {
  return (
    <div className="font-montserrat pt-20 border-t mb-20">
      <h2 className="text-2xl font-semibold mb-16 mx-8 text-center">
        Feedback by Urban Spinners
      </h2>
      <div>
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
  )
}
