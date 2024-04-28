import { ReasonCard } from "./reusable/ReasonCard"
import reasons from "../json/why.json"

export const ReasonSection = () => {
  return (
    <div className="pt-20	font-montserrat border-t tablet:pt-32 desktop:mb-40">
      <h2 className="text-2xl font-semibold mb-16 text-center tablet:text-left tablet:mx-8 desktop:mx-32 desktop:mb-28 desktop:text-4xl">
        Why Urban Spin
      </h2>
      <div className="desktop:mx-32 desktop:flex desktop:gap-32">
        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-8 tablet:mx-10 desktop:grid-cols-1 desktop:gap-20">
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
          className="mt-20 tablet:mt-32 desktop:hidden"
          src="/reasons-img.png"
          alt="black and white photo of a spinning bike"
        />
        <img
          className="hidden desktop:block"
          src="/reasons-desktop.png"
          alt="black and white photo of a spinning bike"
        />
      </div>
    </div>
  )
}
