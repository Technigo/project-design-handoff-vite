import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div className="container relative w-screen">
      <div className="w-screen">
        <img src={heroImg} className="object-none w-screen" alt="Hero Image" />
      </div>
      <div
        className="absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h3
          className="font-avengeance text-primary-lightblue text-3xl"
          style={{ WebkitTextStroke: "0.2px black" }}
        >
          YOUNG HEROES, BIG HEARTS
        </h3>
        <h2 className="font-urbanist bg-white text-primary-lightblue text-xl">
          We empower girls to find their inner dragons through karate.
        </h2>
        <button>
          <img src={registerButton} alt="Register Button" />
        </button>
      </div>
    </div>
  );
};
