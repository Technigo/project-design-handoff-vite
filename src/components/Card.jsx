import PropTypes from 'prop-types';

import cardArray from '../CardArray';

export const Card = () => {
  // not sure how to pass the images
  //need to talk about what div to put classname flex in for all to be in row and not content being on row in div

  return (
    <>
      <div>
        {cardArray.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row">
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Card.propTypes = {
  cardArray: PropTypes.array,
};
