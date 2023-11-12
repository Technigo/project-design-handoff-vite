import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SubheadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
`

const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  animation: scroll 10s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(-10px);
    }

    70% {
      transform: translateX(calc(225px));
    }

    100% {
      transform: translateX(calc(325px));
    }
  }
`

const Subheading = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  white-space: nowrap;
  color: #000000;
  text-decoration: none;
  width: 100%;

  &:hover {
    text-decoration: underlined;
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
      <SlideTrack>
        {subheadingCollection.map((subheadingGroup) => subheadingGroup.subheadingTexts.map((subheading, index) => {
          return (
              <Subheading as="a" href="#" key={index}>{subheading.toUpperCase()}</Subheading>
          )
        }))[sectionId - 1]}
      </SlideTrack>
    </SubheadingWrapper>
  )
}
