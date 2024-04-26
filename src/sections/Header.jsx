export const Header = () => {
  return (
    <section className="h-headerMobile lg:h-headerDesktop flex w-screen bg-header-image bg-cover bg-center bg-no-repeat px-8 py-16 md:px-16 lg:px-32 lg:py-24">
      <div className="flex w-full flex-col justify-end gap-8 ">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-font32 md:text-font40 md:leading-lh48 lg:text-font56 lg:leading-lh56 text-left font-heading leading-10 text-yellow">
            Be with yourself at{" "}
            <span className="text-yellowLight">Oasis Wellness Center</span>
          </h1>
        </div>
        <div className="flex items-end justify-end">
          <button className="flex items-center gap-2 rounded-button border-2 border-b-4 border-yellow bg-yellowMedium px-4 py-2.5 font-heading shadow-darker hover:border-black hover:border-opacity-40 hover:bg-yellow md:py-6 lg:px-12">
            <h4 className="text-heading text-sm leading-5 text-blueDeep md:text-lg md:leading-6 lg:text-2xl lg:leading-8">
              Check Availability
            </h4>
          </button>
        </div>
      </div>
    </section>
  );
};
