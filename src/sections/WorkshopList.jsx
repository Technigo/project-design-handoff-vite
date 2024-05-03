import { WorkshopCard } from "../components/WorkshopCard";
import workshop from "../components/workshop.json";

export const WorkshopList = () => {
  const workshops = workshop;
  return (
    <section className="w-screen px-8 py-16 text-blue md:px-16 lg:px-32 lg:py-24">
      <div className="pb-16">
        <h3 className="md:text-font26 lg:text-font28 lg:leading-lh48 border-l-2 border-blue pl-4 font-heading text-xl font-medium leading-8 md:p-10 md:leading-10 lg:border-l-4">
          Dive into practical workshops and activities that go beyond the
          clichés, offering tangible ways to reshape habits and enrich your
          daily experience. Customize your stay, choose your adventures, and
          embrace a journey that's grounded in reality, accessible to everyone
          seeking a more fulfilling life.
        </h3>
      </div>
      <div className="flex flex-col items-center gap-16">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} workshop={workshop} />
        ))}
        <a
          className="font-mont self-end text-sm font-medium leading-6 tracking-tight underline md:text-lg lg:text-xl"
          href=""
        >
          <p className="font-medium"> See All Workshops</p>
        </a>
      </div>
    </section>
  );
};
