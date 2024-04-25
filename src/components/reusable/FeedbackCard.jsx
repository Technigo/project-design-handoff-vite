import PropTypes from "prop-types";

export const FeedbackCard = ({
  photo,
  text,
  sender,
  profession,
  currentCard,
}) => {
  return (
    <div
      className={`flex flex-col w-64 mb-40 mx-auto tablet:flex-row w-96 ${
        currentCard === false && "hidden"
      }`}
    >
      <img className="h-40 w-40 self-center tablet:mr-8" src={photo} alt="icon" />
      <div>
        <h3 className="italic mt-4">{text}</h3>
        <p className="mt-4">{sender}</p>
        <p>{profession}</p>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  photo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  currentCard: PropTypes.bool,
};
