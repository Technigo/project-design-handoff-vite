import styled from "styled-components";
import data from "../data/data.json";
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
`

export const Articles = () => {
  return (
    <SectionWrapper>
      {data.articles.map((article, index) => {
        return (
          <CardWrapper key={index}>
            <ArticleCard article={article} />
          </CardWrapper>
        )
      })}
    </SectionWrapper>
  )
}
