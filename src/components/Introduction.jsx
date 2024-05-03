import bareWellsDesktop from "/icon-barewells-desktop.png";
import shakeHandsDesktop from "/icon-hand-shake-desktop.png";
import adultChildDesktop from "/icon-adult-child-desktop.png";
import { BtnIntroduction } from "./Buttons";

export const Introduction = () => {
  return (
    <section className="relative flex flex-col justify-center items-center m-auto pt-8 md:px-0 lg:max-w-7xl">
      <div className="flex flex-col justify-center mx-auto px-4 pt-8 p-28 md:max-w-lg lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
          <h2 className="font-medium font-zilla font-text-center text-2xl text-darkBlue lg:text-4xl">
            Hey Mama!
          </h2>
          <p className="text-center font-inter text-sm text-darkBlue lg:text-lg">
            Vi vet hur viktigt det är att lyssna på sin kropp, därför finns vi här
            för att skräddarsy just din träningsupplevelse. Det är du som sätter
            agendan och fokuset för din träning. Delta i ett sammanhang där du kan
            möta andra samma skeenden i livet eller låt det fungera som din egna
            personliga oas där du värnar om din fysiska och psykiska hälsa.{" "}
          </p>
        </div>
        <div className="flex flex-col items-start gap-8 py-4 md:gap-16 lg:py-6 lg:flex-row">
          <div className="flex items-center gap-4 md:gap-11 lg:flex-col lg:gap-8">
            <img className="h-20 md:h-32 lg:h-40" src={shakeHandsDesktop} alt="shake hands-icon" />
            <p className="font-inter text-sm font-medium md:text-base lg:text-lg lg:text-center">Få experthjälp av våra Fysioterapeuter och personliga tränare.</p>
          </div>
          <div className="flex items-center gap-4 md:gap-11 lg:flex-col lg:gap-8">
          <img className="h-20 md:h-32 lg:h-40" src={bareWellsDesktop}alt="barewells-icon" />
            <p className="font-inter text-sm font-medium md:text-base lg:text-l lg:text-center">
              Över 30 olika program anpassade efter dig och dina behov. Skräddarsy din upplevelse.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-11 lg:flex-col lg:gap-8">
            <img className="h-20 md:h-32 lg:h-40" src={adultChildDesktop} alt="adult-child-icon" />
            <p className="font-inter text-sm font-medium md:text-base lg:text-l lg:text-center">
              Ditt barn är alltid välkommet! Vi erbjuder även barnvärdar som tar hand om ditt barn.
            </p>
          </div>
        </div>
      </div>
      <BtnIntroduction />
    </section>
  );
};
