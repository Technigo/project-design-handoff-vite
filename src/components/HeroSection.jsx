import { Button } from "./reusable/Button"

export const HeroSection = () => {
  return (
    <div
      className="relative bg-hero-pattern bg-no-repeat bg-cover bg-bottom object-none h-136 w-auto py-20"
      >
      <div className="flex flex-col justify-center mt-24">
        <h1 className="font-bebas text-green text-center text-6xl px-6 pb-4">
          READY TO SWEAT?
        </h1>
        <h2 className="font-montserrat text-base text-white text-center px-4">
          The world-famous spinning club is now ready for you in Gothenburg!
        </h2>
      </div>
      <div className="mt-16">
        <Button buttonText={"Book Now"} />
      </div>
    </div>
  )
}
