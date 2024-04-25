import feedback from "../json/feedback.json"

export const FeedbackCard = () => {
  return (
    <div>
      {feedback.feedback.map(({ id, photo, text, sender }) => {
        return (
          <div key={id}>
            <img src={photo} alt="icon"></img>
            <h3 className="italic">{text}</h3>
            <p>{sender}</p>
          </div>
        )
      })}
    </div>
  )
}
