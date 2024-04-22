import "./2-HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-div">
      <div className="hero-text">
        <h1 className="header-text">Ready to sweat?</h1>
        <h2 className="info-text">
          The world-famous spinning club is now ready for you in Gothenburg!
        </h2>
        <button className="cta-btn">Book Now</button>
      </div>
    </div>
  );
};
