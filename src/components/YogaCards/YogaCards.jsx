import "./YogaCards.css";
import angleImage from "../../assets/angle-right-solid.svg";
import kundaliniImage from "../../assets/card images/kundalini.png";
import traumaImage from "../../assets/card images/trauma.png";
import yogacardImage from "../../assets/card images/yogacard.png";
import freeflowImage from "../../assets/card images/freeflow.png";

// export const YogaCards = () => {
//   return (
//   <>
//   <div className="yoga-card-container">
//     <h1>
//       Our classes
//     </h1>
//     <div className="image-card">

//     </div>
//   </div>
//   </>
//   )
// };

const cardData = [
  {
    title: "Kundalini Yoga",
    image: kundaliniImage,
    link: "#",
  },
  {
    title: "Yin Yoga",
    image: yogacardImage,
    link: "#",
  },
  {
    title: "Trauma Healing",
    image: traumaImage,
    link: "#",
  },
  {
    title: "Free flow Yoga",
    image: freeflowImage,
    link: "#",
  },
];

export const YogaCards = () => {
  return (
    <div className="card-container">
      <h1 className="card-title">Our classes</h1>
      {cardData.map((card, index) => (
        <div
          className={`card ${index % 2 === 0 ? "card-odd" : "card-even"}`}
          key={index}>
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <a href={card.link} className="card-link">
              Learn more
              <img src={angleImage} alt="arrow" className="btn-icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
