export const CoachCard = ({ coach }) => {
  return (
    <div className=" mr-8 w-64">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          className="inset-0 h-72 w-64 rounded-3xl object-cover"
          src={coach.imageUrl}
          alt={coach.altText}
        />
        <div className="flex w-64 flex-col  p-4">
          <h3 className="font-heading text-xl font-medium text-blue ">
            {coach.name}
          </h3>
          <p className="mt-2 font-normal text-sm tracking-tight text-blue">
            {coach.topics}
          </p>
          <p className="mt-2 w-full whitespace-normal border-l-2 border-blue px-2 font-normal text-sm tracking-tight text-blue">
            {coach.text}
          </p>
        </div>
      </div>
    </div>
  );
};
