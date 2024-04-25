import { WorkshopCard } from "../components/WorkshopCard";
import workshop from "../components/workshop.json";

export const WorkshopList = () => {
  const workshops = workshop;
  return (
    <div className="text-blueDeep mx-8 py-16">
      <div className="pb-16">
        <h3 className="font-heading border-blueDeep border-l-2 px-4 text-xl font-medium">
          Dive into practical workshops and activities that go beyond the
          clichés, offering tangible ways to reshape habits and enrich your
          daily experience. Customize your stay, choose your adventures, and
          embrace a journey that's grounded in reality, accessible to everyone
          seeking a more fulfilling life.
        </h3>
      </div>
      <div className="flex flex-col gap-16">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} workshop={workshop} />
        ))}
        <a
          className="self-end text-sm font-medium font-normal tracking-tight underline"
          href=""
        >
          See All Workshops
        </a>
      </div>
    </div>
  );
};
