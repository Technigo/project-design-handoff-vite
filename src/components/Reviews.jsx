import { customerReviews } from "./Copy";
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import "./Reviews.css";

export const Reviews = () => {


  return (

    <div className="bg-lightgray">
     <div className="reviews relative bg-no-repeat bg-contain my-4 bg-lightgray py-3 "   style={{
        backgroundImage: `url(${leftblob}), url(${rightblob})`,
        backgroundPosition: 'left center, right center',
        zIndex: '-1'
      }}>
        <div className="flex flex-wrap justify-center reviews-container max-h-24  ">
          {customerReviews.map((review, index) => (
            <div className="reviews flex-col justify-items-start py-1 w-24"  key={index} >
              <p className="paragraph-small-mob text-sm font-inter text-darkblue text-center">{review}</p>
            </div>
          ))}
        </div>
        </div>


    </div>

  );
}