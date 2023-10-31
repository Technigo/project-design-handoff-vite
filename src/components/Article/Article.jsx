import "./Article.css"
import articleData from "../../articleData.json"
import { ArticleCard } from "./ArticleCard";

let articleArray = articleData.articles;
console.log(articleArray)

export const Article = () => {
  return (
    <div className="article-wrapper">
      {articleArray.map((article, index) =>
        <ArticleCard key={index} articles={ article} />
      )}
        
    </div>
  
    
  )
}
