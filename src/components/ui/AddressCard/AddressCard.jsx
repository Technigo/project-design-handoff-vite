import styles from "./AddressCard.module.scss";
export const AddressCard = ({ address }) => {
  return (
    <div className={styles.card}>
      <address>
        <h6>Address:</h6>
        <p>{address}</p>
      </address>
    </div>
  );
};
