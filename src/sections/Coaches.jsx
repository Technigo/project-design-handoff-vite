import { CoachCard } from "../components/CoachCard";
import coaches from "../components/coaches.json";

export const Coaches = () => {
  const ourCoaches = coaches;
  return (
    <section className="w-screen overflow-x-auto whitespace-nowrap bg-yellow px-8 py-16 md:px-16 lg:px-32 lg:py-24">
      <h2 className="md:text-font28 font-heading text-2xl font-medium text-blue md:leading-8 lg:text-4xl lg:leading-10">
        Meet our coaches
      </h2>
      <div className="flex gap-8 md:gap-16 lg:justify-around lg:gap-0">
        {ourCoaches.map((coach, index) => (
          <CoachCard key={index} coach={coach} />
        ))}
      </div>
    </section>
  );
};
