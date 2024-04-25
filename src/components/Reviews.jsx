import { customerReviews } from "./Copy";
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import "./Reviews.css";

export const Reviews = () => {


  return (

    <div className="mx-auto align-middle  bg-yogawhite flex-1  py-7">
     <div className="reviews  bg-yogawhite relative center bg-no-repeat bg-contain"   style={{
        backgroundImage: `url(${leftblob}), url(${rightblob})`,
        backgroundPosition: 'left center, right center',
        backgroundSize: 'contain',
      }}>
        <div className="flex justify-evenly">
          {customerReviews.map((review, index) => (
            <div className="reviews flex-col justify-items-start w-24"  key={index} >
              <p className="font-inter text-darkblue text-center mobile:text-paragraph-mob  tablet: text-title-h2-h3-paragraph-large-tablet-and-paragraph-small-dt  ">{review}</p>
            </div>
          ))}
        </div>
        </div>


    </div>

  );
}