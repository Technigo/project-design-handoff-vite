import styled from "styled-components";

import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutVideoCard } from "../Components/WorkoutVideoCard";
import data from "../data/data.json";

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
  width: 100%;
 
  @media (max-width: 393px) {
     overflow-x: auto;
  }
  @media (min-width: 835px) {
    gap: 24px;
  }
`

export const Workout = () => {
  const sectionId = 1;

  return (
    <WorkOutWrapper>
      <Headings sectionId={sectionId} />
      <Subheadings sectionId={sectionId} />
      <CardWrapper>
        {data.workout.map((video, index) => {
          return (
            <WorkoutVideoCard key={index} video={video} />
          )
        })}
      </CardWrapper>
    </WorkOutWrapper>
  )
}
