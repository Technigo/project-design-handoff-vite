import styled from "styled-components";
import data from "../data/data.json";
import { ArticleCard } from "../Components/ArticleCard";

export const Articles = () => {
  return (
    <div className="article-wrapper">
      {data.articles.map((article, index) => {
        return (
          <div className="article-card" key={index}>
            <ArticleCard article={article} />
          </div>
        )
      })}
    </div>
  )
}
