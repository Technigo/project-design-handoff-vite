

import "./Reviews.css";

export const Reviews = ({ customerReviews, leftBlob, rightBlob }) => {

  return (
    <div className="review-wrap">
      <div className="max-w-[1370px] mx-auto align-middle  bg-yogawhite flex-1  mt-[65px] pt-[20px]  ">
        <div className="reviews  bg-yogawhite  bg-no-repeat bg-contain md:mx-8" style={{
          backgroundImage: `url(${leftBlob}), url(${rightBlob})`,
          backgroundPosition: 'left 15px, right -15px',
          backgroundSize: 'contain, contain',
          minHeight: '111px',
          maxHeight: '300px',
        }}>
          <div className="flex justify-evenly " >
            {customerReviews.map((review, index) => (
              <div className="reviews flex-col justify-items-start leading-[20px] sm:w-24 m-2 text-16 md:leading-[33px] md:w-32 md:text-20 lg:leading-[45px] lg:w-56 lg:text-25" key={index} >
                <p className="font-inter text-darkblue text-center ">{review}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
}