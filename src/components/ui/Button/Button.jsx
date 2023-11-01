import styles from "./Button.module.scss";

export const Button = ({
  children,
  handleClick = null,
  type = "button",
  onTriggerAnimation = null,
}) => {
  console.log(onTriggerAnimation);
  function handleEventClick() {
    onTriggerAnimation && onTriggerAnimation(1);
    handleClick();
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
