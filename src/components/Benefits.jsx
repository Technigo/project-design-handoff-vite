import { BenefitsCard } from "./BenefitsCard";
import jsonData from "../benefits.json"

export const Benefits = () => {
  return (
    <div>
      {jsonData.map((item, index) => (
      <BenefitsCard key={index} {... item}/>
      ))}
    </div>
  );
};
