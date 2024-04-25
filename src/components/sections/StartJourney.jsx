import { Button } from "../styles/Button";
import journeyImage from "/assets/images/crossfit-54.png";

export const StartJourney = () => {
  return (
    <div className="px-20 py-40 lg:px-80 grid grid-cols-1">
      <div className="sm:grid grid-cols-2 gap-x-16">
        <div className="grid gap-y-4">
          <h3 className="text-center md:text-h3-tab-mob md:text-left md:self-end lg:text-h3-desktop md:align">
            start your mum crossfit journey!
          </h3>
          <p className="text-center md:text-left md:max-w-sm lg:text-pl-desktop lg:max-w-sm">
            Join our 8 week intro class for new mums starting May 15. No
            previous experience of crossfit needed.
          </p>
          <Button
            className={
              "join-btn text-join-btn text-black md:text-join-btn-tablet lg:text-join-btn-desktop bg-crimson-light active:bg-plum-light hover:bg-terracotta text-button w-40 h-10 justify-self-center md:justify-self-start"
            }
            label={"Join today!"}
          />
        </div>
        <div className="mt-4">
          <img src={journeyImage} alt="Woman lifting weights" className="" />
        </div>
      </div>
    </div>
  );
};
