import mobileHeroImage from "/image-hero-mobile.png";
import nonMobileHeroImage from "/image-hero-non-mobile.png";

export const Hero = () => {
  return (
    <section className="realtive flex justify-center items-center">
      <img
        src={mobileHeroImage}
        alt="hero image"
        className="w-full md:hidden"
      />
      <img
        src={nonMobileHeroImage}
        alt="hero image"
        className="hidden w-full md:block"
      />
      <div className="absolute max-w-850 mx-auto text-center">
        <h1 className="top-36 font-zilla font-semibold text-center text-135 ">
          Gravid och Mamma-träning på dina villkor.
        </h1>
        <h2>
          Styrketräning, magaktivering eller återhämtning, vad behöver din kropp
          idag?
        </h2>
        <button>Bli medlem</button>
      </div>
    </section>
  );
};
