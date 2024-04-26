export const CoachCard = ({ coach }) => {
  return (
    <div className="flex flex-col gap-6 py-8 md:py-16 lg:py-24">
      <div className="h-72">
        <img
          className="inset-0 h-full w-full rounded-3xl object-cover"
          src={coach.imageUrl}
          alt={coach.altText}
        />
      </div>
      <div className="flex w-64 flex-col gap-2 text-blue md:w-96 lg:gap-4">
        <h3 className="md:text-font26 lg:text-font28 lg:leading-lh48 font-heading text-xl font-medium leading-8 md:leading-10">
          {coach.name}
        </h3>
        <h4 className="font-heading text-sm md:text-lg md:leading-6 lg:text-2xl lg:leading-8">
          {coach.topics}
        </h4>
        <p className="md:py-1 font-mont whitespace-normal border-l-2 border-blue px-2 text-sm font-medium leading-6 tracking-tight md:px-4 md:text-lg lg:border-l-4 lg:px-8 lg:text-xl">
          {coach.text}
        </p>
      </div>
    </div>
  );
};
