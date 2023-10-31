import styles from "./SliderSection.module.scss";
import { Slider } from "../../ui/Slider/Slider";
import { ObserverWrapper } from "../../ui/ObserverWrapper/ObserverWrapper";

export const SliderSection = () => {
  return (
    <>
      <div className={styles.sliders}>
        <ObserverWrapper>
          <Slider />
        </ObserverWrapper>
      </div>
    </>
  );
};
