import { customerReviews } from "./Copy";
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import "./Reviews.css";

export const Reviews = () => {


  return (

    <>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="column-5" className="reviews-container" style={{
          backgroundImage: `url(${leftblob}), url(${rightblob})`,
          backgroundPosition: "left center, right center",
          backgroundRepeat: "no-repeat",
        }}>
          {customerReviews.map((review, index) => (
            <ul className="columns-3" key={index} className="review">
              <li className="flex columns-3">{review}</li>
            </ul>
          ))}
        </div>
      </div>

    </>

  );
}