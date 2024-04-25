import { Testimonials } from "./Testimonials";
import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div className="relative mb-28 md:pb-52">
      <img
        src={heroImg}
        className="object-cover size-full absolute"
        alt="Hero Image"
      />
      <div className="flex flex-col w-72 top-28 md:top-80 pb-2 mx-4 md:mx-8 lg:mx-28 relative">
        <h1
          className="font-avengeance text-primary-lightblue text-3xl mb-8 md:text-4xl lg:text-6xl"
          style={{ WebkitTextStroke: "0.4px black" }}
        >
          YOUNG <br></br>HEROES,<br></br> BIG HEARTS
        </h1>
        <h2 className="font-urbanist bg-white text-primary-lightblue text-xl mb-4 lg:text-3xl ">
          We empower girls to find their inner dragons through karate.
        </h2>
        <button className="md:absolute md:-top-28 md:right-0">
          <img src={registerButton} alt="Register Button" />
        </button>
      </div>
      <div className="relative -bottom-28 md:-bottom-80">
        <Testimonials />
      </div>
    </div>
  );
};
