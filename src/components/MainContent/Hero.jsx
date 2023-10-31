import HeroImage from "/assets/heroimage.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      <img
        src={HeroImage}
        alt="Picture of woman with her face next to a dark brown horse's face"
      />
      <div className="hero-text">
        <h1>Our mission</h1>
        <p>
          We provide specialized yoga classes to enhance riders&apos; strength,
          balance, and well-being. Join us in promoting a holistic approach to
          horsemanship and self-care.
        </p>
      </div>
    </div>
  );
};
