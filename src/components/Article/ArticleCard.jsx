import { Description } from "../../reusableComponents/Description"
import { Heading } from "../../reusableComponents/Heading"
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color:#E2DFDF ;
`
const TextWrapper = styled.div`
display:grid;
grid-template-columns: 1fr;
margin-left: 10px;
`
const ArticleImage = styled.img`
max-height: fit-content;
max-width: 100%;
`
const ArticleDescription = styled(Description)`
font-family: Arsenal;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const ArticleHeading = styled(Heading)`
font-family: var(--heading-font-family);
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const ArticleCard = (props) => {
  let imageArticle = props.articles.image;
  let titleArticle = props.articles.name;
  let descriptionArticle = props.articles.description;
  return (
    <CardWrapper className="card-wrapper">
      <ArticleImage src={imageArticle} alt="Article image " />
      <TextWrapper>
      <ArticleHeading text={ titleArticle } />
        < ArticleDescription text={descriptionArticle} />
        </TextWrapper>
    </CardWrapper>
  )
}

