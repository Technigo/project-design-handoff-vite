import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
`;

export const Classes = () => {
  const { t, ready } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const cards = t("homePage.aside.cards", { returnObjects: true }); // Accessing the 'cards' section of the JSON data

  if (!ready) return "Loading classes"; // If the translations are not ready, return "Loading classes..."

  return (
    <ClassesContainer>
      <div className="cards">
        {cards.map(
          (
            card,
            index // Map over the 'cards' array
          ) => (
            <div key={index} className={`card-${index}`}>
              {" "}
              {/* Add a key prop to each card */}
              <img src={card.imageurl} alt={card.imagealt} />
              <h3>{card.heading}</h3>
              <p>{card.paragraph}</p>
            </div>
          )
        )}
      </div>
    </ClassesContainer>
  );
};
