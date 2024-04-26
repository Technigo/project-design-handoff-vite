import { CoachCard } from "../components/CoachCard";
import coaches from "../components/coaches.json";

export const Coaches = () => {
  const ourCoaches = coaches;
  return (
    <section className="w-screen overflow-x-auto whitespace-nowrap border-2 bg-yellow p-8 px-8 py-16 md:px-16 lg:px-32 lg:py-24">
      <h2 className="p-4 font-heading text-2xl font-medium text-blue">
        Meet our coaches
      </h2>
      <div className="flex">
        {ourCoaches.map((coach, index) => (
          <CoachCard key={index} coach={coach} />
        ))}
      </div>
    </section>
  );
};
