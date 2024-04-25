import PropTypes from "prop-types"

export const FeedbackCard = ({ photo, text, sender, profession }) => {
  return (
    <div className="flex flex-col w-64 mb-40 mx-auto">
      <img className="h-40 w-40 self-center" src={photo} alt="icon"></img>
      <h3 className="italic mt-4">{text}</h3>
      <p className="mt-4">{sender}</p>
      <p>{profession}</p>
    </div>
  )
}

FeedbackCard.propTypes = {
  photo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
}
