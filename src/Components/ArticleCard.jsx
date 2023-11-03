

import { ReadMoreButton } from "./ReadMoreButton";

export const ArticleCard = ({ article }) => {
  const isDesktop = window.innerWidth > 835;

  return (
    <div className="artile-card">
      {isDesktop ? (
        <>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.imageDescription} />
          <p>{article.text}</p>
          <ReadMoreButton />
        </>
      ) : (
        <>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.imageDescription} />
          <ReadMoreButton />
        </>
      )}
    </div>
  )
}
