export const TrustIndicators = () => {
  return (
    <div
      id="trust-indicators-section"
      className="my-20 mx-4 font-montserrat flex justify-between gap-5 sm:gap-10 tablet:gap-20 tablet:my-32 desktop:my-40 desktop:mx-32 desktop:gap-24"
    >
      <div className="flex flex-col text-center flex-1 desktop:flex-row">
        <p className="font-semibold text-2xl mb-2 tablet:text-4xl desktop:mr-4 desktop:text-6xl desktop:w-60">
          4.9
        </p>
        <p className="text-base tablet:text-lg desktop:text-xl">
          rating at google
        </p>
      </div>
      <div className="flex flex-col text-center flex-1 desktop:flex-row">
        <p className="font-semibold text-2xl mb-2 tablet:text-4xl desktop:mr-4 desktop:text-6xl">
          +35.000
        </p>
        <p className="text-base tablet:text-lg desktop:text-xl">
          motivated members
        </p>
      </div>
      <div className="flex flex-col text-center flex-1 desktop:flex-row">
        <p className="font-semibold text-2xl mb-2 tablet:text-4xl desktop:mr-4 desktop:text-6xl">
          72
        </p>
        <p className="text-base tablet:text-lg desktop:text-xl">
          exclusive clubs worldwide
        </p>
      </div>
    </div>
  );
};
