import styles from "./Button.module.scss";

export const Button = ({
  children,
  handleClick = null,
  type = "button",
  onTriggerAnimation = null,
  id = null,
}) => {
  function handleEventClick() {
    onTriggerAnimation && onTriggerAnimation(1);
    if (id === 3) {
      setTimeout(handleClick, 100);
      return clearTimeout(handleClick);
    } else if (type === "submit") {
      setTimeout(handleClick, 1000);
      return clearTimeout(handleClick);
    } else {
      handleClick();
    }
  }

  return (
    <button
      className={styles.button}
      onClick={handleEventClick}
      onTouchStart={handleEventClick}
      type={type}
    >
      <p>{children}</p>
    </button>
  );
};
