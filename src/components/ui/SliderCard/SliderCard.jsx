import { MessageCard } from "../MessageCard/MessageCard";
import { Pagination } from "../Pagination";
import styles from "./SliderCard.module.scss";

export const SliderCard = ({
  imagePath,
  text,
  title,
  buttonText,
  bg,
  border,
  styling,
  sliderRef,
  index,
}) => {
  return (
    <li className={styles.slider} style={{ background: bg }}>
      <div className={styles.card}>
        <div
          style={{ backgroundImage: `url(${imagePath})` }}
          className={`${styles.image} ${styles[styling]}`}
        ></div>
        <Pagination sliderRef={sliderRef} index={index} />
        <div className={styles.text}>
          <MessageCard text={text} title={title} buttonText={buttonText} border={border} />
        </div>
      </div>
    </li>
  );
};
