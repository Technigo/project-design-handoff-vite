import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutVideoCard } from "../Components/WorkoutVideoCard";
import data from "../data/data.json";

export const Workout = () => {
  const sectionId = 1;

  return (
    <section className="workout">
      <Headings sectionId={sectionId} />
      <Subheadings sectionId={sectionId} />
      <div className="workout-wrapper">
        {data.workout.map((video, index) => {
          return (
            <div className="workout-card" key={index}>
              <WorkoutVideoCard video={video} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
