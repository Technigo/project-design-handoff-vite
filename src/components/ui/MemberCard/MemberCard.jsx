import styles from "./MemberCard.module.scss";

export const MemberCard = ({ name, text, imgPath }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <img src={imgPath} />
        <h3>{name}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
