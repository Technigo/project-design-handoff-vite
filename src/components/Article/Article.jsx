// import "./Article.css"
// import articleData from "../../enArticleData.json"
// import { ArticleCard } from "./ArticleCard";
// import styled from 'styled-components';

// const ArticleWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 10px;
//   max-width: 100%;
//   padding: 10px 25px 0 25px;
// `


// let articleArray = articleData.articles;
// console.log(articleArray)

// export const Article = () => {
//   return (
//     <ArticleWrapper className="article-wrapper">
//       {articleArray.map((article, index) =>
//         <ArticleCard key={index} articles={ article} />
//       )}
        
//     </ArticleWrapper>
  
    
//   )
// }

import "./Article.css";
import articleData from "../../enArticleData.json";
import { ArticleCard } from "./ArticleCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 38px 15px;
`;

let articleArray = articleData.articles;
console.log(articleArray);

export const Article = () => {
  const { t, ready } = useTranslation();

  const articles = t("articles", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <>
      <ArticleWrapper className="article-wrapper">
        {articles.map((article, index) => (
          <ArticleCard key={index} articles={article} />
        ))}
      </ArticleWrapper>
    </>
  );
};