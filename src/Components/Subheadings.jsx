import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SubheadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
  width: 100%;
  overflow: scroll;
  margin: 10px 0;
`

const Subheading = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  white-space: nowrap;
  color: #000000;
  text-decoration: none;
  width: 100%;
  animation: 3s slide-right ease-in-out;

  &:hover {
    text-decoration: underlined;
  }

  @keyframes slide-right {
    from {
      margin-left: -800%;
    }
    to {
      margin-left: 40%;
    }
  }

  @media (min-width: 835px) {
    font-size: 30px;
  }
`

export const Subheadings = ({ sectionId }) => {
  const { t } = useTranslation();

  const subheadingCollection = [
    {
      sectionId: 1,
      subheadingTexts: [
        t("workout.subHeadings.cardio"), 
        t("workout.subHeadings.hiit"), 
        t("workout.subHeadings.yoga"), 
        t("workout.subHeadings.glutes"), 
        t("workout.subHeadings.back"), 
        t("workout.subHeadings.arms"), 
        t("workout.subHeadings.zumba"), 
        t("workout.subHeadings.stretch")
      ]
    },
    { 
      sectionId: 2,
      subheadingTexts: [
        t("workoutPlans.subHeadings.one"), 
        t("workoutPlans.subHeadings.two"), 
        t("workoutPlans.subHeadings.three"), 
        t("workoutPlans.subHeadings.four"), 
        t("workoutPlans.subHeadings.five")
      ]
    }
  ]

  return (
    <SubheadingWrapper key={sectionId}>
        {subheadingCollection.map((subheadingGroup) => subheadingGroup.subheadingTexts.map((subheading, index) => {
          return (
              <Subheading as="a" href="#" key={index}>{subheading.toUpperCase()}</Subheading>
          )
        }))[sectionId - 1]}
    </SubheadingWrapper>
  )
}
