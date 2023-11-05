import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { useTranslation } from "react-i18next";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px auto 52px auto;
  max-width: 500px;

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
`;

export const Articles = () => {
  const { t, ready } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const articles = t("homePage.mainSection.articles", { returnObjects: true }); // Accessing the 'cards' section of the JSON data

  // const { mainSection } = jsonData.homePage; // Accessing the 'articles' section of the JSON data

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
              <h2>{article.heading}</h2>
              <p>{article.paragraph}</p>
              <Button>{article.button}</Button>
            </div>
          )
        )}
      </div>
    </ArticlesContainer>
  );
};
