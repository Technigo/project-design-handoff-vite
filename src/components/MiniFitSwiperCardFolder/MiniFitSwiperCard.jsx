import "./MiniFitSwiperCard.css";
import { Link } from "react-router-dom";

export const MiniFitSwiperCard = ({ img, cardTitle, cardText, buttonText }) => {
  return (
    <div className="miniCard">
      <div className="img-container">
        <img src={img} alt="slide card" />
      </div>
      <h4>{cardTitle}</h4>
      <p>{cardText}</p>
      <Link to="/" className="minifit-link">
        {buttonText}
      </Link>
    </div>
  );
};
