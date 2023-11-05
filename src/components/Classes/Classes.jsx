import styled from "styled-components";
import { useTranslation } from "react-i18next";
//import jsonData from "../../Translations/en.json";

const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 52px;
  gap: 64px;
  max-width: 400px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  /* .align:hover {
    background-image: url("/pb-allign.png");
    width: 100%;
    height: auto;
    object-fit: cover;
  } */
`;

export const Classes = () => {
  const { t, ready } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const cards = t("cards", { returnObjects: true }); // Accessing the 'cards' section of the JSON data

  const { aside } = jsonData.homePage; // Accessing the 'aside' section of the JSON data

  if (!ready) return "Loading classes"; // If the translations are not ready, return "Loading classes..."

  return (
    <ClassesContainer>
      <div className="cards">
        {aside.cards.map((card, index) => (
          <div key={index} className={`card-${index}`}>
            <h3>{card.heading}</h3>
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>
    </ClassesContainer>
  );
};

{
  /* <div className="align">
<p>
  Prima Barre Align combines our classic strength-building barre
  technique with a unique emphasis on flexibility and balance training
  to deliver a restorative full body workout.
</p>
</div>

<div className="define">
<p>
  Prima Barre Define fuses concepts from our classic barre technique
  with weight-based strength training to develop muscular strength and
  power.
</p>
</div>

<div className="power">
<p>
  Prima Barre Power is our fusion workout of Classic Prime Barre and
  high-intensity interval training designed to elevate your heart rate,
  build strength, and increase your metabolism.
</p>
</div>

<div className="classic">
<p>
  Prima Barre Classic is our original barre class. Our proprietary
  technique is the fastest, most effective full-body workout.{" "}
</p>
</div> */
}
