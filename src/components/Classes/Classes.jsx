import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ClassesContainer = styled.div`
  padding: 80px 32px;
  max-width: 600px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
  .image-wrapper {
    position: relative;
    border-radius: 12px;
    border: 2.3px solid #f26631;
  }
  .overlay {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    inset: 0; // top, right, bottom, left
    border-radius: 12px;
    padding: 7.5px;
    line-height: 160%;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
  }
  @media screen and (min-width: 768px) {
    .overlay {
      gap: 42px;
      padding: 1rem;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 24px;
      line-height: 160%;
      font-weight: 300;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1300px;
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .image-wrapper {
    }
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
            <div key={index} className="image-wrapper">
              {" "}
              {/* Add a key prop to each card */}
              <img src={card.imageurl} alt={card.imagealt} />
              <div className="overlay">
                <h3>{card.heading}</h3>
                <p>{card.paragraph}</p>
              </div>
            </div>
          )
        )}
      </div>
    </ClassesContainer>
  );
};
