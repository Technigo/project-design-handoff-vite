export const WorkshopCard = ({ workshop }) => {
  return (
    <div className="h-workCard rounded-tr-custom flex flex-col overflow-hidden rounded-tl-2xl">
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover object-center"
          src={workshop.imageUrl}
          alt={workshop.altText}
        />
      </div>
      <div className="bg-yellowLight rounded-bl-custom border-yellow flex flex-1 flex-col rounded-br-2xl border-b-4 border-l-4 px-4 py-8">
        <h3 className="font-heading text-xl font-medium">{workshop.title}</h3>
        <p className="pt-2 text-sm font-medium font-normal tracking-tight">
          {workshop.text}
        </p>
        <div className="flex justify-end items-end flex-grow">
          <button className="font-heading bg-yellowMedium border-yellow rounded-button shadow-darker hover:bg-yellow flex items-center gap-2 border-2 border-b-4 px-4 py-2.5 text-sm hover:border-black hover:border-opacity-40">
            <h4>Continue to Book</h4>
            <img src="/icons/arrow_s.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
