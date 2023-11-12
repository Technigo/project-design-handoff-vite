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

  .articles {
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
    padding-bottom: 30px;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    padding-bottom: 10px;
  }

  Button {
    background-color: #c00202;
    color: #ffffff;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  Button {
    font-size: 18px;
    padding: 8px 25px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .article-0 {
    margin-top: 100px;
  }

  .article-1 {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    .article-0 {
      display: flex;
      flex-direction: row-reverse;
    }

    .article-1 {
      display: flex;
      flex-direction: row;
    }

    img {
      width: 400px;
      height: auto;
      object-fit: cover;
    }

    .article-details {
      width: 100%;
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
              <img src={article.imageurl} alt={article.imagealt} />
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
