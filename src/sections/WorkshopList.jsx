import { WorkshopCard } from "../components/WorkshopCard";
import workshop from "../components/workshop.json";

export const WorkshopList = () => {
  const workshops = workshop;
  return (
    <div>
      <p>
        Dive into practical workshops and activities that go beyond the clichés,
        offering tangible ways to reshape habits and enrich your daily
        experience. Customize your stay, choose your adventures, and embrace a
        journey that's grounded in reality, accessible to everyone seeking a
        more fulfilling life.
      </p>
      {workshops.map((workshop, index) => (
        <WorkshopCard key={index} workshop={workshop} />
      ))}
      <a href="">See All Workshops</a>
    </div>
  );
};
