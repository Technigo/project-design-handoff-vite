import PropTypes from "prop-types"

export const FeedbackCard = ({ photo, text, sender }) => {
  return (
    <div className="flex flex-col w-60 mx-auto">
      <img className="h-40 w-40 self-center" src={photo} alt="icon"></img>
      <h3 className="italic">{text}</h3>
      <p>{sender}</p>
    </div>
  )
}

FeedbackCard.propTypes = {
  photo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
}
