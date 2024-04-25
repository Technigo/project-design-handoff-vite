import { ValuePropsCard } from "./ValuePropsCard";
import jsonData from "../ValueProps.json";

export const ValueProps = () => {
  return (
    <div className="flex gap-8 ml-4 py-1 md:flex-row md:justify-center lg:gap-16 md:container overflow-x-scroll scrolling-touch">
      {jsonData.map((item, index) => {
        return <ValuePropsCard key={index} {...item} />;
      })}
    </div>
  );
};
