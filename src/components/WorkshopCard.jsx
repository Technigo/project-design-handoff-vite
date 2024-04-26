export const WorkshopCard = ({ workshop }) => {
  return (
    <div className="lg:h-workCardLarge h-workCardSmall md:h-workCardMed flex flex-col overflow-hidden rounded-tl-2xl rounded-tr-custom lg:flex-row lg:rounded-bl-custom">
      <div className="h-1/2 lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover object-center"
          src={workshop.imageUrl}
          alt={workshop.altText}
        />
      </div>
      <div className="flex flex-1 flex-col rounded-bl-custom rounded-br-2xl border-b-4 border-l-4 border-yellow bg-yellowLight px-4 py-8 md:p-8 lg:rounded-bl-none lg:rounded-tr-custom lg:border-b-8 lg:border-l-0 lg:border-t-8">
        <h3 className="md:text-font26 font-heading text-xl font-medium leading-8 md:leading-10">
          {workshop.title}
        </h3>
        <p className="pt-2 font-normal text-sm font-medium leading-6 tracking-tight md:text-lg md:leading-10">
          {workshop.text}
        </p>
        <div className="flex flex-grow items-end justify-end">
          <button className="flex items-center gap-2 rounded-button border-2 border-b-4 border-yellow bg-yellowMedium px-4 py-2.5 font-heading shadow-darker hover:border-black hover:border-opacity-40 hover:bg-yellow md:py-6">
            <h4 className="text-sm leading-5 md:text-lg md:leading-6">
              Continue to Book
            </h4>
            <img
              className="h-2 md:h-4"
              srcSet="/icons/arrow_s.svg 300w, /icons/arrow_m.svg 767w, /icons/arrow_l.svg 1023w"
              sizes="(max-width: 767px) 300px,
       (max-width: 1023px) 767px,
       1024px"
              src="/icons/arrow_s.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
