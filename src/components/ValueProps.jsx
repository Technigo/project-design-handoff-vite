import { ValuePropsCard } from "./ValuePropsCard";
import jsonData from "../ValueProps.json";

export const ValueProps = () => {
  return (
    <div className="flex gap-12 overflow-x-auto md:flex md:flex-row">
      {jsonData.map((item, index) => {
        return <ValuePropsCard key={index} {...item} />;
      })}
    </div>
  );
};
