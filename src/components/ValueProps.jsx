import { ValuePropsCard } from "./ValuePropsCard";
import jsonData from "../ValueProps.json";

export const ValueProps = () => {
  return (
    <div className="flex gap-8 px-4 pb-4 md:flex-row md:justify-center lg:gap-16 overflow-x-scroll scroll-smooth md:overflow-auto">
      {jsonData.map((item, index) => {
        return <ValuePropsCard key={index} {...item} />;
      })}
    </div>
  );
};
