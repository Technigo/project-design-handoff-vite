import { BenefitsCard } from "./BenefitsCard";
import jsonData from "../benefits.json"

export const Benefits = () => {
  return (
    <div className="mx-4 flex flex-col items-center gap-8">
      {jsonData.map((item, index) => (
      <BenefitsCard key={index} {... item}/>
      ))}
    </div>
  );
};
