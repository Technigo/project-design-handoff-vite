import { StepItem } from "./StepsItem";

const text = [
  "We’ll send you random acts of kindness",
  "You perform the act",
  "You feel good and track",
];

export const Steps = () => {
  return (
    <>
      <StepItem text={text} index={0} />
      <StepItem text={text} index={1} />
      <StepItem text={text} index={2} />
    </>
  );
};
