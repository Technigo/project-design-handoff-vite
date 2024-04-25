import { ReasonCard } from "./reusable/ReasonCard"
import reasons from "../json/why.json"

export const ReasonSection = () => {
  return (
    <div className="pt-20	font-montserrat border-t">
      <h2 className="text-2xl font-semibold mb-16 text-center">
        Why Urban Spin
      </h2>
      <div className="grid grid-cols-1 gap-10">
        {reasons.reasons.map(({ id, icon, title, description }) => (
          <ReasonCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
      <img
        className="pt-20"
        src="/reasons-image.png"
        alt="black and white photo of a spinning bike"
      />
    </div>
  )
}
