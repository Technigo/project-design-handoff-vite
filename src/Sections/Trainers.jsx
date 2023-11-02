import { Headings } from "../Components/Headings";
import { TrainerCard } from "../Components/TrainerCard";
import data from "../data/data.json";

export const Trainers = () => {
  const sectionId = 4;

  return (
    <section className="trainers">
      <Headings sectionId={sectionId} />
      <div className="flex flex-row gap-x-2">
        {data.trainers.map((trainer, index) => {
          return (
            <div className="flex" key={index}>
              <TrainerCard trainer={trainer} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
