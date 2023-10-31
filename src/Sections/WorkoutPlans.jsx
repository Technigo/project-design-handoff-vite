import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutPlanCard } from "../Components/WorkoutPlanCard";
import data from "../data/data.json";

export const WorkoutPlans = () => {
  const sectionId = 2;

  return (
    <section className="workout-plans">
      <Headings sectionId={sectionId} />
      <Subheadings sectionId={sectionId} />
      <div className="plan-wrapper">
        {data.plans.map((plan, index) => {
        return (
          <div className="plan-card" key={index}>
            <WorkoutPlanCard plan={plan} />
          </div>
        )
      })}
      </div>
    </section>
  )
}
