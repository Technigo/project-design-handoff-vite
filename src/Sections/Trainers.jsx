import styled from "styled-components";
import { Headings } from "../Components/Headings";
import { TrainerCard } from "../Components/TrainerCard";


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
  
  const trainerData = [
    {
      "image": "./images/trainer-1.png",
      "name": "Natasha"
    },
    {
      "image": "./images/trainer-2.png",
      "name": "Chloe"
    },
    {
      "image": "./images/trainer-3.png",
      "name": "Taylor"
    },
    {
      "image": "./images/trainer-4.png",
      "name": "Rich"
    }
  ]

  return (
    <TrainerWrapper>
      <Headings sectionId={sectionId} />
      <TrainerCardWrapper>
        {trainerData.map((trainer, index) => {
          return (
            <div key={index}>
              <TrainerCard trainer={trainer} />
            </div>
          )
        })}
      </TrainerCardWrapper>
    </TrainerWrapper>
  )
}
