import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ArticleCard } from "../Components/ArticleCard";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 394px) {
    gap: 64px;
  }

  @media (min-width: 835px) {
    gap: 0;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-top-left-radius: var(--medium-radius);
  border-top-right-radius: var(--medium-radius);

  @media (min-width: 835px) {
    background: none;
  }
`

export const Articles = () => {
  const { t } = useTranslation();

  const articleData = [
    {
      "image": "./images/article-1.png",
      "imageDescription": t("about.article-1.image-alt"),
      "title": t("about.article-1.subHeading"),
      "text": t("about.article-1.text"),
      "isReverse": false
    },
    {
      "image": "./images/article-2.png",
      "imageDescription": t("about.article-2.image-alt"),
      "title": t("about.article-2.subHeading"),
      "text": t("about.article-2.text"),
      "isReverse": true
    },
    {
      "image": "./images/article-3.png",
      "imageDescription": t("about.article-3.image-alt"),
      "title": t("about.article-3.subHeading"),
      "text": t("about.article-3.text"),
      "isReverse": false
    }
  ]

  return (
    <SectionWrapper>
      {articleData.map((article, index) => {
        return (
          <CardWrapper key={index}>
            <ArticleCard article={article} />
          </CardWrapper>
        )
      })}
    </SectionWrapper>
  )
}
