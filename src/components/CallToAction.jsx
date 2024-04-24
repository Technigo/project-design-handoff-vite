import { Button } from "./Button";

export const CallToAction = () => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      <img src="/banner-phone.png"></img>
      <h2 className="text-white text-2xl font-medium mt-16">
        Looking for a Challenge?
      </h2>
      <p className="text-white">
        Save your spot for the next class now!</p>
      <div className="mt-6 mb-16">
        <Button buttonText={"Book Now"} />
      </div>
      <div>
        <img src="/banner-phone.png" className="transform rotate-180" />
      </div>
      {/* make sure img is filling the whole vw here */}
    </div>
  );
};
