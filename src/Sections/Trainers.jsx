import { Headings } from "../Components/Headings";
import { TrainerCard } from "../Components/TrainerCard";
import data from "../data/data.json";

export const Trainers = () => {
  const sectionId = 4;

  return (
    <section className="trainers">
      <Headings sectionId={sectionId} />
      <div className="trainer-wrapper">
        {data.trainers.map((trainer, index) => {
          return (
            <div className="trainer-card" key={index}>
              <TrainerCard trainer={trainer} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
