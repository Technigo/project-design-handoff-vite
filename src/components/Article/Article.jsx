import articleData from "../../translations/enArticleData.json";
import { ArticleCard } from "./ArticleCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 38px 15px;
  margin-bottom: 20px;
 

@media (min-width: 667px) and (max-width: 1024px){
  display: none;
}

@media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 38px 0;
   
  }

`;

const TabletAndSmaller = styled.div`
display: none;
 @media (min-width: 667px) and (max-width: 1024px){
  display: block;
  height: 400px;
  
}

@media (min-width: 1024px) {
  display: none;
  }

`;

let articleArray = articleData.articles;
console.log(articleArray);

export const Article = () => {
  const { t, ready } = useTranslation();

  const articles = t("articles", { returnObjects: true });

  if (!ready) return "loading translations...";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>

      <ArticleWrapper className="article-wrapper">
        {articles.map((article, index) => (
          <ArticleCard key={index} articles={article} />
        ))}
      </ArticleWrapper>

      <TabletAndSmaller>
        <Slider {...settings}>
          {articles.map((article, index) => (
            <ArticleCard key={index} articles={article} />
          ))}
        </Slider>
      </TabletAndSmaller >
    </>
  );


};
