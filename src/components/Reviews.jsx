import { customerReviews } from "./Copy";
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import "./Reviews.css";

export const Reviews = () => {


  return (

    <div className="mx-auto align-middle  bg-yogawhite flex-1  py-7">
     <div className="reviews  bg-yogawhite  bg-no-repeat bg-contain md:mx-8 "   style={{
        backgroundImage: `url(${leftblob}), url(${rightblob})`,
        backgroundPosition: 'left bottom, right top',
        backgroundSize: 'contain, contain',
        minHeight: '111px',
        maxHeight:'300px',

      }}>
        <div className="flex justify-evenly">
          {customerReviews.map((review, index) => (
            <div className="reviews flex-col justify-items-start sm:w-24 m-2 text-16 md:w-32 md:text-20 lg:w-56 lg:text-25"  key={index} >
              <p className="font-inter text-darkblue text-center ">{review}</p>
            </div>
          ))}
        </div>
        </div>


    </div>

  );
}