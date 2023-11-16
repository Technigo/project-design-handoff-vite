import styles from "./Pagination.module.scss";
import { useMemo } from "react";
import useScreenSize from "../../../hooks/useScreenSize";

export const Pagination = ({ index, sliderRef }) => {
  const [width] = useScreenSize();

  const currenImageWidth = useMemo(() => {
    let imageWidth;
    if (width < 744) return (imageWidth = width);
    if (width >= 744 && width < 1080) return (imageWidth = 600);
    if (width >= 1080) return (imageWidth = 704);
    return imageWidth;
  }, [width]);

  function handleClickToLeft() {
    sliderRef.current.scrollLeft -= currenImageWidth;
  }

  function handleClickToRight() {
    sliderRef.current.scrollLeft += currenImageWidth;
  }

  return (
    <div className={styles.box}>
      <img
        src="/icons/right-paw.svg"
        className={styles.left_paw}
        onClick={() => handleClickToLeft()}
        onTouchStart={() => handleClickToLeft()}
      />

      <img src="/icons/cat-left.svg" className={styles.left_cat} />
      <div className={styles.dots_box}>
        {Array.from({ length: 3 }, (_, i) => (
          <span
            className={styles.dots}
            key={i}
            style={{
              border: i === index ? " solid 1px #2a3439" : "",
              transform: i === index ? " scale(1.4)" : "",
            }}
          ></span>
        ))}
      </div>
      <img src="/icons/cat-right.svg" className={styles.right_cat} />
      <img
        src="/icons/right-paw.svg"
        className={styles.right_paw}
        onClick={() => handleClickToRight()}
        onTouchStart={() => handleClickToRight()}
      />
    </div>
  );
};
