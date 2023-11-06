import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutVideoCard } from "../Components/WorkoutVideoCard";


const WorkOutWrapper = styled.section`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;

  @media (min-width: 835px) {
    gap: 24px;
  }
`

export const Workout = () => {
  const sectionId = 1;

  const { t } = useTranslation();

  const workoutData = [
    {
        "image": "./images/workout-1.png",
        "title": t("workout.videoTexts.one.title"),
        "length": t("workout.videoTexts.one.length")
    },
    {
        "image": "./images/workout-2.png",
        "title": t("workout.videoTexts.two.title"),
        "length": t("workout.videoTexts.two.length")
    },
    {
        "image": "./images/workout-3.png",
        "title": t("workout.videoTexts.three.title"),
        "length": t("workout.videoTexts.three.length")
    },
    {
        "image": "./images/workout-4.png",
        "title": t("workout.videoTexts.four.title"),
        "length": t("workout.videoTexts.four.length")
    }
  ]
  
  return (
    <WorkOutWrapper>
      <Headings sectionId={sectionId} />
      <Subheadings sectionId={sectionId} />
      <CardWrapper>
        {workoutData.map((video, index) => {
          return (
            <div key={index}>
              <WorkoutVideoCard video={video} />
            </div>
          )
        })}
      </CardWrapper>
    </WorkOutWrapper>
  )
}
