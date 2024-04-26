import { ReasonCard } from "./reusable/ReasonCard"
import reasons from "../json/why.json"

export const ReasonSection = () => {
  return (
    <div className="pt-20	font-montserrat border-t tablet:pt-32">
      <h2 className="text-2xl font-semibold mb-16 text-center tablet:text-left tablet:mx-8 desktop:mx-32 desktop:mt-40">
        Why Urban Spin
      </h2>
      <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-8 tablet:mx-10">
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
        className="pt-20 tablet:pt-32"
        src="/reasons-img.png"
        alt="black and white photo of a spinning bike"
      />
    </div>
  )
}
