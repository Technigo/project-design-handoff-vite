/* import mobileHeroImage from "/image-hero-mobile.png";

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-100%" style={{backgroundImage: `url(${mobileHeroImage})`}}>
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h1>Gravid och Mamma-träning på dina villkor.</h1>
        <h2>
          Styrketräning, magaktivering eller återhämtning, vad behöver din kropp
          idag?
        </h2>
        <button className="bg-white text-black py-2 px-4 mt-4 rounded-full">Bli medlem</button>
      </div>
    </section>
  );
}; */






import mobileHeroImage from "/image-hero-mobile.png";

export const Hero = () => {
  return (
    <section className="">
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
 

