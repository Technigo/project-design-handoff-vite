import { SliderCard } from "../SliderCard/SliderCard";
import styles from "./Slider.module.scss";
import { content as data } from "../../../statics/content";

export const Slider = () => {
  return (
    <div className={styles.slider_box}>
      <div className={styles.slider}>
        {data.slider.map((slid) => (
          <SliderCard
            key={slid.title}
            text={slid.text}
            title={slid.title}
            buttonText={slid.button}
            imagePath={slid.imgPath}
            bg={slid.bgColor}
            border={slid.border}
            styling={slid.styling}
          />
        ))}
      </div>
    </div>
  );
};
