import { Description } from "../../reusableComponents/Description"
import { Heading } from "../../reusableComponents/Heading"


export const ArticleCard = (props) => {
  let imageArticle = props.articles.image;
  let titleArticle = props.articles.name;
  let descriptionArticle = props.articles.description;
  return (
    <div className="card-wrapper">
      <img src={ imageArticle } alt="Article image " />
      <Heading text={ titleArticle } />
      <Description text={descriptionArticle} />
    </div>
  )
}

