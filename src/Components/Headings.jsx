import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Heading = styled.h1`
  font-size: 30px;
  font-style: italic;
  font-weight: 300;
  padding: 0;

  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 835px) {
    font-size: var(--heading-size-tablet);
    font-weight: var(--heading-weight);
  }
`

export const Headings = ({ sectionId }) => {
  const { t } = useTranslation();

  const headingCollection = [
    {
      sectionId: 1,
      text: t("workout.heading")
    },
    {
      sectionId: 2,
      text: t("workoutPlans.heading")
    },
    {
      sectionId: 3,
      text: t("reviews.heading")
    },
    {
      sectionId: 4,
      text: t("trainers.heading")
    },
    {
      sectionId: 5,
      text: t("about.heading")
    },
    {
      sectionId: 6,
      text: t("contact.heading")
    },
    {
      sectionId: 7,
      text: t("soMe.heading")
    }
  ];
  
  return (
    <Heading key={sectionId}>
      {headingCollection.map((heading) => heading.text.toUpperCase())[sectionId - 1]}
    </Heading>
  )
}
