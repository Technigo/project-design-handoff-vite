import styled from "styled-components";
import { Button } from "../Buttons/Button";
//import jsonData from "../../Translations/en.json";
import { useTranslation } from "react-i18next";
import enTranslations from "../../Translations/en.json";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 60px 52px;
  gap: 64px;
  max-width: 400px;
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

  const { mainSection } = enTranslations.homePage;

  // const { mainSection } = jsonData.homePage; // Accessing the 'articles' section of the JSON data

  if (!ready) return "Loading articles"; // If the translations are not ready, return "Loading articles..."

  return (
    <ArticlesContainer>
      <div className="articles">
        {mainSection.articles.map((article, index) => (
          <div key={index} className={`article-${index}`}>
            <img src={article.imageurl} alt={article.imagealt} />
            <h2>{article.heading}</h2>
            <p>{article.paragraph}</p>
            <Button>{article.button}</Button>
          </div>
        ))}
      </div>

      {/* <Button>Start free trial</Button> */}
    </ArticlesContainer>
  );
};
