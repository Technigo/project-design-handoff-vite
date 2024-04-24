import { ValuePropsCard } from "./ValuePropsCard";
import jsonData from "../ValueProps.json";

export const ValueProps = () => {
  return (
    <div>
      {jsonData.map((item, index) => (
        <ValuePropsCard key={index} {...item} />
      ))}
    </div>
  );
};
