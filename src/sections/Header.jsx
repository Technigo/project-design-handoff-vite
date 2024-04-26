export const Header = () => {
  return (
    <div className="h-544 bg-header-image bg-cover bg-center bg-no-repeat py-20">
      <div className=" mx-auto flex w-96 flex-col p-4">
        <h2 className=" mt-20 text-center font-heading text-3xl text-yellow">
          Be with yourself at
        </h2>
        <h2 className=" text-center font-heading text-3xl text-yellowLight">
          Oasis Wellness Center
        </h2>
        <button className="m-6  ml-auto w-40 rounded-3xl bg-yellowMedium p-1">
          Check Availability
        </button>
      </div>
    </div>
  );
};
