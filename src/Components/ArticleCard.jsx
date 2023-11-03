import styled from "styled-components";
import { ReadMoreButton } from "./ReadMoreButton";

const ArticleCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-top: 10px;

  @media (max-width: 834px) {
    position: relative;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: right;
`

const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticleTitle = styled.h2`
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 30px;
  line-height: 36.33px;
  margin: 0;
`

const ArticleImage = styled.img`
  width: 100%;
`

export const ArticleCard = ({ article }) => {
  const isDesktop = window.innerWidth > 835;

  return (
    <ArticleCardItem>
      {isDesktop ? (
        <>
          <img src={article.image} alt={article.imageDescription} />
          <ArticleText>
            <ArticleTitle>{article.title}</ArticleTitle>
            <p>{article.text}</p>
            <StyledButtonContainer>
              <ReadMoreButton />
            </StyledButtonContainer>
          </ArticleText>
          
        </>
      ) : (
        <>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleImage src={article.image} alt={article.imageDescription} />
          <ReadMoreButton />
        </>
      )}
    </ArticleCardItem>
  )
}
