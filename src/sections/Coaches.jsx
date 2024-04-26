import { CoachCard } from "../components/CoachCard";
import coaches from "../components/coaches.json";

export const Coaches = () => {
  const ourCoaches = coaches;
  return (
    <div className="overflow-x-auto whitespace-nowrap border-2 bg-yellow p-8 py-10">
      <h2 className="p-4 font-heading text-2xl font-medium text-blue">
        Meet our coaches
      </h2>
      <div className="flex">
        {ourCoaches.map((coach, index) => (
          <CoachCard key={index} coach={coach} />
        ))}
      </div>
    </div>
  );
};
