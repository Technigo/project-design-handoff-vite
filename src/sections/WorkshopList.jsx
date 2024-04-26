import { WorkshopCard } from "../components/WorkshopCard";
import workshop from "../components/workshop.json";

export const WorkshopList = () => {
  const workshops = workshop;
  return (
    <section className="px-8 py-16 text-blueDeep md:px-16">
      <div className="pb-16">
        <h3 className="md:text-font26 lg:text-font28 lg:leading-lh48 border-l-2 border-blueDeep pl-4 font-heading text-xl font-medium leading-8 md:p-10 md:leading-10">
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
          className="self-end font-normal text-sm font-medium tracking-tight underline"
          href=""
        >
          <p className="font-medium"> See All Workshops</p>
        </a>
      </div>
    </section>
  );
};
