import styles from "./HeroSection.module.css";
import { Button } from "../../ui/Button/Button";

export const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroBox">
          <h1>Where Serenity Meets Stretch</h1>
          <p>
            At our yoga studio, we're not your typical pretzel-twisting,
            'Om'-chanting bunch. We're all about infusing your yoga journey with
            a big dose of FUN, a sprinkle of QUIRKY, and a heap of ZEN.
          </p>
        </div>
        <div className="heroBox">
          <p>
            <Button buttonName="Join today!" />
            <Button buttonName="Read more" />
          </p>
          <img src="/assets/hero-img.png" />
        </div>
      </div>
    </>
  );
};
