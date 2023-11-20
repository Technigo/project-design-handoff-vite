import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useTranslation } from "react-i18next";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px;
  max-width: 650px;

  .article-0 {
    margin-bottom: 50px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    padding-bottom: 20px;
    line-height: 160%;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 160%;
  }

  Button {
    background-color: #c00202;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    margin-top: 10px;
    line-height: 160%;
  }

  @media screen and (min-width: 768px) {
    margin: auto;

    Button {
      font-size: 18px;
      padding: 8px 16px;
      border-radius: 10px;
      margin-top: 10px;
    }

    .article-0 {
      margin-top: 50px;
    }

    .article-1 {
      margin-bottom: 50px;
    }

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;

    .article-0 {
      // Add a class to each article
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-column: 2 / 2; // Position the image on the right
        grid-row: 1 / 1; // Position the image on the top

        .article-details {
          grid-column: 1 / 2; // Position the article details on the left
          grid-row: 1 / 1; // Position the article details on the top
        }
      }
    }

    .article-1 {
      // Add a class to each article
      display: grid;
      grid-template-columns: 1fr 1fr; // Create a grid with two columns
      column-gap: 70px;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    p {
      line-height: 160%;
    }

    Button {
      padding: 8px 32px;
    }
  }
`;

export const Articles = () => {
  const { t, ready } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const articles = t("homePage.mainSection.articles", { returnObjects: true }); // Accessing the 'cards' section of the JSON data

  if (!ready) return "Loading articles"; // If the translations are not ready, return "Loading articles..."

  return (
    <ArticlesContainer>
      <div className="articles">
        {articles.map(
          (
            article,
            index // Loop through the 'articles' array
          ) => (
            <div key={index} className={`article-${index}`}>
              {/* Add a class to each article */}
              <img src={article.imageurl} alt={t("article.imagealt")} />
              {/* Accessing the 'imageurl' and 'imagealt' sections of the JSON data */}
              <div className="article-details">
                <h2>{article.heading}</h2>
                <p>{article.paragraph}</p>
                <Button>{article.button}</Button>
              </div>
            </div>
          )
        )}
      </div>
    </ArticlesContainer>
  );
};
