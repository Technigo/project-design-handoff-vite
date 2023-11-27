import styles from "./Error.module.scss";

export const Error = () => {
  return (
    <div className={styles.error_page}>
      <img src="/icons/logo.svg" />
      <h3>Page Not Found</h3>
      <p>404</p>
      <img src="/icons/paw.png" className={styles.circle} />
    </div>
  );
};
