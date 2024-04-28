import { Testimonials } from "./Testimonials";
import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div className="relative mb-28 md:pb-52 lg:pb-180 lg:mb-40">
      <img
        src={heroImg}
        className="object-cover size-full absolute"
        alt="Hero Image"
      />
      <div className="flex flex-col w-72 lg:w-auto top-28 md:top-80 lg:top-64 pb-2 mx-4 md:mx-8 lg:mx-56 relative">
        <h1
          className="font-avengeance text-primary-lightblue text-3xl mb-8 md:text-4xl lg:text-6xl"
          style={{ WebkitTextStroke: "0.4px black" }}
        >
          YOUNG <br></br>HEROES,<br></br> BIG HEARTS
        </h1>
        <h2 className="font-urbanist text-primary-lightblue text-xl mb-4 lg:text-3xl">
          <span className="bg-white leading-4 lg:leading-10">
            We empower girls to find their <br></br>inner dragons through
            karate.
          </span>
        </h2>
        <button className="md:absolute md:-top-28 md:right-0 lg:-bottom-56 lg:top-auto lg:right-auto lg:left-56">
          <img className="lg:w-44" src={registerButton} alt="Register Button" />
        </button>
      </div>
      <div className="relative -bottom-28 md:-bottom-80 lg:-bottom-220">
        <Testimonials />
      </div>
    </div>
  );
};
