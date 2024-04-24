import mobileHeroImage from "/image-hero-mobile.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img src={mobileHeroImage} alt="hero image" />
      <h1>Gravid och Mamma-träning på dina villkor.</h1>
      <h2>
        Styrketräning, magaktivering eller återhämtning, vad behöver din kropp
        idag?
      </h2>
      <button>Bli medlem</button>
    </section>
  );
};
