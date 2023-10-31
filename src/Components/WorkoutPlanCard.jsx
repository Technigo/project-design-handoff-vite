

export const WorkoutPlanCard = ({ plan }) => {
  return (
    <>
      <img src={plan.image} alt={plan.title} />
      <p>{plan.title}</p>
    </>
  )
}
