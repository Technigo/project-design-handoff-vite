
import { Description } from "../../reusableComponents/Description"
import { Heading } from "../../reusableComponents/Heading"
import styled from 'styled-components'


const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  padding: 8px;
  border-radius: 8px;
  margin-left: 20px;
  background-color: #E2DFDF;
  transition: background-color 0.3s; // Add a background color change transition effect
  cursor: pointer; 
  &:hover {
border-radius: 8px;
background: #E8E8E8;
box-shadow: 0px 4px 4px 0px #2AA9C0;
  }

  @media (min-width: 667px) and (max-width: 1024px){
   height: 250px;
  
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr ;
  } 

`;
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
@media (min-width: 667px) and (max-width: 1024px){
  font-size: 12px;
  margin-top: 0;
  }
`
const ArticleHeading = styled(Heading)`
font-family: var(--heading-font-family);
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (min-width: 667px) and (max-width: 1024px){
  font-size:15px;
  margin-bottom: 0;
  }
`

export const ArticleCard = (props) => {
  let imageArticle = props.articles.image;
  let titleArticle = props.articles.name;
  let descriptionArticle = props.articles.description;



  return (
    <CardWrapper className="card-wrapper">
      <ArticleImage src={imageArticle} alt="Article image " />
      <TextWrapper>
        <ArticleHeading text={titleArticle} />
        < ArticleDescription text={descriptionArticle} />
      </TextWrapper>
    </CardWrapper>
  )
}

