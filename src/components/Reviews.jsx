import "./Reviews.css";
import { useTranslation } from "react-i18next";

// ReviewItem component
const ReviewItem = ({ reviewKey }) => {
  const { t } = useTranslation();
  return (
    <div className="reviews flex-col justify-items-start leading-[20px] w-[150px] m-2 text-[16px] md:leading-[33px] md:w-[150px] md:text-[20px] lg:leading-[45px] lg:w-[200px] lg:text-[25px]">
      <p className="font-inter text-darkblue text-center">{t(reviewKey)}</p>
    </div>
  );
};

export const Reviews = ({ leftBlob, rightBlob }) => {
  // Array of reviews for translation
  const reviewKeys = ["customerReviews.review1", "customerReviews.review2", "customerReviews.review3"];

  return (
    <a className='cursor-pointer' href="#">
      <div className="review-wrap">
        <div className="max-w-[1370px] mx-auto align-middle bg-yogawhite flex-1 mt-[33px] pt-[20px]">
          <div className="reviews bg-yogawhite bg-no-repeat bg-contain md:mx-8" style={{
            backgroundImage: `url(${leftBlob}), url(${rightBlob})`,
            backgroundPosition: 'left 15px, right -15px',
            backgroundSize: 'contain, contain',
            minHeight: '111px',
            maxHeight: '300px',
          }}>
            <div className="flex justify-evenly">
              {reviewKeys.map((key) => (
                <ReviewItem key={key} reviewKey={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};