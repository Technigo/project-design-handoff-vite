import PropTypes from "prop-types";

export const ReviewCard = ({ review }) => {
  return (
    <div className="border-2 border-dashed border-gray-500 mx-6 px-2 py-6 mb-12 desktop:my-20 flex">
      <p className="italic text-center text-sm desktop:text-[24px] desktop:leading-8">
        {review.review}
      </p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired
};