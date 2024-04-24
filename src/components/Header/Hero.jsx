import mobileHeroImage from "/image-hero-mobile.png";
import nonMobileHeroImage from "/image-hero-non-mobile.png";

export const Hero = () => {
  return (
    <section className="">
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
      <div className="">
        <h1 className="absolute top-36 font-zilla font-semibold text-center leading-12 text-3xl">
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
