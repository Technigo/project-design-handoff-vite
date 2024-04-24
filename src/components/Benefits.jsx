import { BenefitsCard } from "./BenefitsCard";
import jsonData from "../benefits.json"

export const Benefits = () => {
  return (
    <div className="flex flex-col items-center gap-8 mx-4">
      {jsonData.map((item, index) => (
      <BenefitsCard key={index} {... item}/>
      ))}
    </div>
  );
};
