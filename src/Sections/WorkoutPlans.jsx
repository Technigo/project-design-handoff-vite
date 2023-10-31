import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutPlanCard } from "../Components/WorkoutPlanCard";
import data from "../data/data.json";

export const WorkoutPlans = () => {
  const sectionId = 2;

  return (
    <section className="workout-plans">
      <Headings sectionId={sectionId} />
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="lock-closed">
          <path 
            id="Icon" 
            d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" 
            stroke="#545F71" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </g>
      </svg>
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
