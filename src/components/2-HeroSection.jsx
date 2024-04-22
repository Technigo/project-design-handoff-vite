import "./2-HeroSection.css";

export const HeroSection = () => {
  return (
    <>
      <div className="hero-div">
        <div className="hero-text">
          <h1 className="header-text">Ready to sweat?</h1>
          <h2 className="info-text">
            The world-famous spinning club is now ready for you in Gothenburg!
          </h2>
          <button className="cta-btn">Book Now</button>
        </div>
      </div>
      <div className="image-div">
        <img className="hero-phone" src="./src/assets/images/HeroPhone.png" />
        <img className="hero-tablet" src="./src/assets/images/HeroTablet.png" />
        <img
          className="hero-desktop"
          src="./src/assets/images/HeroDesktop.png"
        />
      </div>
    </>
  );
};
