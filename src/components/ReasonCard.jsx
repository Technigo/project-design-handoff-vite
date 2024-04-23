import reasons from "../json/why.json"

export const ReasonCard = () => {
  return (
    <div>
      {reasons.reasons.map(({ id, icon, title, description }) => {
        return (
          <div key={id}>
            <icon src={icon}></icon>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}
