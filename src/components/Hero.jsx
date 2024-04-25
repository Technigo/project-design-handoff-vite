import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div className="container" style={{ height: "598px" }}>
      <div className="w-screen">
        <img
          src={heroImg}
          className="object-cover w-full relative"
          style={{ height: "598px" }}
          alt="Hero Image"
        />
      </div>
      <div
        className="absolute flex flex-col w-80"
        style={{
          top: "10%",
          left: "5%",
          height: "598px",
        }}
      >
        <h1
          className="font-avengeance text-primary-lightblue text-3xl mb-8 md:text-4xl lg:text-6xl lg:mt-20"
          style={{ WebkitTextStroke: "0.4px black" }}
        >
          YOUNG <br></br>HEROES,<br></br> BIG HEARTS
        </h1>
        <h2 className="font-urbanist bg-white text-primary-lightblue text-xl mb-4 lg:text-3xl ">
          We empower girls to find their inner dragons through karate.
        </h2>
        <button>
          <img src={registerButton} alt="Register Button" />
        </button>
      </div>
    </div>
  );
};
