import cardArray from '../CardArray';
import PropTypes from 'prop-types';
import image from '../assets/cardImages/food.png';
// import svgImage from "../assets/cardImages/food.svg"

export const Card = ({ item: { id, title, image, paragraph, alt } }) => {
  console.log('is cardArray being passed?', cardArray);
  console.log(image);

  // not sure how to pass the images
  //need to talk about what div to put classname flex in for all to be in row and not content being on row in div

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row" key={id}>
          <img src={} alt={`${alt}`} />
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  cardArray: PropTypes.array,
};
