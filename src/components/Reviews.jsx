

import "./Reviews.css";

export const Reviews = ({ customerReviews, leftBlob, rightBlob }) => {

  return (
    <a className='cursor-pointer' href="#">
      <div className="review-wrap">
        <div className="max-w-[1370px] mx-auto align-middle  bg-yogawhite flex-1  mt-[33px] pt-[20px]  ">
          <div className="reviews  bg-yogawhite  bg-no-repeat bg-contain md:mx-8" style={{
            backgroundImage: `url(${leftBlob}), url(${rightBlob})`,
            backgroundPosition: 'left 15px, right -15px',
            backgroundSize: 'contain, contain',
            minHeight: '111px',
            maxHeight: '300px',
          }}>
            <div className="flex justify-evenly " >
              {customerReviews.map((review, index) => (
                <div className="reviews flex-col justify-items-start leading-[20px] w-[150px] m-2 text-[16px] md:leading-[33px] md:w-[150px] md:text-[20px] lg:leading-[45px] lg:w-[200px] lg:text-[25px]" key={index} >
                  <p className="font-inter text-darkblue text-center ">{review}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </a>
  );
}
