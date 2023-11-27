import styles from "./AddressCard.module.scss";
export const AddressCard = ({ address, h6 }) => {
  return (
    <div className={styles.card}>
      <address>
        <h6>{h6}</h6>
        <p>{address.address}</p>
      </address>
    </div>
  );
};
