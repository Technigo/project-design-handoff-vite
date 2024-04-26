export const Booking = () => {
  return (
    <section className="flex w-screen flex-col gap-8 px-8 py-16 font-heading text-2xl text-blue sm:p-16 md:px-16 lg:px-32 lg:py-24">
      <h3 className="md:text-font26 px-4 py-8 font-heading text-xl font-medium leading-8 md:px-8 md:leading-10 lg:p-16">
        Your path to a healthier lifestyle starts here! Take your first step to
        feeling inner balance and peace.
      </h3>
      <div className="flex flex-grow items-end justify-end">
        <button className="flex items-center gap-2 rounded-button border-2 border-b-4 border-yellow bg-yellowMedium px-4 py-2.5 font-heading shadow-darker hover:border-black hover:border-opacity-40 hover:bg-yellow md:py-6">
          <h4 className="text-sm leading-5 text-blueDeep md:text-lg md:leading-6">
            Continue to Book
          </h4>
          <img
            className="h-2 md:h-4 lg:h-6"
            src="/icons/arrow_l.svg"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
};
