import { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import styles from "./ObserverWrapper.module.scss";

export const ObserverWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref] = useInView({
    threshold: 0,
  });

  function handleScroll(isView, entry) {
    if (isView) setIsVisible(true);
    else setIsVisible(false);
  }
  return (
    <InView
      as="div"
      onChange={(inView, entry) => handleScroll(inView, entry)}
      className={`${styles.wrapper} ${isVisible ? [styles.visible] : ""}`}
    >
      {children}
    </InView>
  );
};
