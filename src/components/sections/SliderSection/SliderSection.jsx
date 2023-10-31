import styles from "./SliderSection.module.scss";
import { Slider } from "../../ui/Slider/Slider";

export const SliderSection = () => {
  return (
    <>
      <div className={styles.sliders}>
        <Slider />
      </div>
      <div className={styles.slides_desktop}></div>
    </>
  );
};
