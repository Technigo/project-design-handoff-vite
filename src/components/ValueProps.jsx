import { ValuePropsCard } from "./ValuePropsCard";
import jsonData from "../ValueProps.json";

export const ValueProps = () => {
  return (
    <div className="flex gap-8 md:flex md:flex-row md:justify-center lg:gap-16 container mx-auto">
      {jsonData.map((item, index) => {
        return <ValuePropsCard key={index} {...item} />;
      })}
    </div>
  );
};
