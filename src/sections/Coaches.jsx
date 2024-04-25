import { CoachCard } from "../components/CoachCard";
import coaches from "../components/coaches.json";

export const Coaches = () => {
  const ourCoaches = coaches;
  return (
    <div>
      <h1>Meet our coaches</h1>
      {ourCoaches.map((coach, index) => (
        <CoachCard key={index} coach={coach} />
      ))}
    </div>
  );
};
