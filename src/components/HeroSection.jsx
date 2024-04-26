import { Button } from "./reusable/Button";

export const HeroSection = () => {
  return (
    <div className="relative bg-hero-pattern bg-no-repeat bg-cover bg-bottom object-none h-136 w-auto py-20 tablet:h-220 tablet:bg-hero-tablet desktop:bg-hero-desktop desktop:h-244">
      <div className="flex flex-col justify-center mt-24 tablet:mx-8">
        <h1 className="font-bebas text-green text-center text-6xl px-6 pb-2 tablet:text-tablethero tablet:mt-20">
          READY TO SWEAT?
        </h1>
        <h2 className="font-montserrat text-base text-white text-center px-4 tablet:text-3xl">
          The world-famous spinning club is now ready for you in Gothenburg!
        </h2>
      </div>
      <div className="mt-16">
        <Button buttonText={"Book Now"} />
      </div>
    </div>
  );
};
