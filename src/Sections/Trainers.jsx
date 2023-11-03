import styled from "styled-components";

import { Headings } from "../Components/Headings";
import { TrainerCard } from "../Components/TrainerCard";
import data from "../data/data.json";

const TrainerWrapper = styled.section`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const TrainerCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 0px 10px 0px 5px;
  overflow-x: auto;
`

export const Trainers = () => {
  const sectionId = 4;

  return (
    <TrainerWrapper>
      <Headings sectionId={sectionId} />
      <TrainerCardWrapper>
        {data.trainers.map((trainer, index) => {
          return (
            <div className="flex" key={index}>
              <TrainerCard trainer={trainer} />
            </div>
          )
        })}
      </TrainerCardWrapper>
    </TrainerWrapper>
  )
}
