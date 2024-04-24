import { Button } from "./Button";
import { Navbar } from "./Navbar";

export const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center object-none h-96 w-96"
      style={{ backgroundImage: "url('/hero-phone.png')" }}
    >
      <Navbar />
      <div className="flex flex-col">
        <h1 className="font-bebas text-green text-6xl">READY TO SWEAT?</h1>
        <h2 className="font-montserrat text-base text-white">
          The world-famous spinning club is now ready for you in Gothenburg!
        </h2>
      </div>
      <Button buttonText={"Book Now"} />
    </div>
  );
};
