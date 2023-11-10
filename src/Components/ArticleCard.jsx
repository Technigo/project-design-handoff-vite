import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const ArticleCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-top: 10px;
  position: relative;

  @media (min-width: 835px) {
    position: static;
  }
`
// Boolean prop in styled components does not work
// const InnerWrapper = styled.div`
//   flex-direction: ${props => props.$reverse ? "row-reverse": "row"};

//   display: flex;
//   gap: 19px;
// `

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 30px;
  flex: 1 1 0;
`

const ArticleTitle = styled.h2`
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 30px;
  line-height: 36.33px;
  margin: 0;
`

const ArticleText = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: var(--heading-size-mobile);
  line-height: var(--heading-height-mobile);
`

const ReadMoreBtn = styled.button`
  border-radius: var(--large-radius);
  border: none;
  padding: 10px 20px;
  background-color: var(--secondary);
  font-family: var(--font);
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
  width: fit-content;
  position: absolute;
  bottom: 5%;
  right: 3%;
  
  @media (min-width: 394px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 36.33px;
  }
  
  @media (min-width: 835px) {
    position: static;

    &:hover {
    background-color: var(--hover);
    color: #FFFFFF;
    }
  } 
`

const ArticleImage = styled.img`
  flex: 1 1 0;
`

export const ArticleCard = ({ article }) => {
  const isDesktop = useMediaQuery({minWidth: 835});

  const { t } = useTranslation();

  return (
    <ArticleCardItem>
      {isDesktop ? (
        article.isReverse ? (
          <InnerWrapper>
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleText>{article.text}</ArticleText>
              <ReadMoreBtn type="button">{t("about.read")}</ReadMoreBtn>
            </ArticleContent>
            <ArticleImage src={article.image} alt={article.imageDescription} />
          </InnerWrapper>
        ) : (
          <InnerWrapper>
            <ArticleImage src={article.image} alt={article.imageDescription} />
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleText>{article.text}</ArticleText>
              <ReadMoreBtn type="button">{t("about.read")}</ReadMoreBtn>
            </ArticleContent>
          </InnerWrapper>
        )
      ) : (
        <>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleImage src={article.image} alt={article.imageDescription} />
          <ReadMoreBtn type="button">{t("about.read")}</ReadMoreBtn>
        </>
      )}
    </ArticleCardItem>
  )
}
