import styles from "./Button.module.css";

import React from "react";

export const Button = ({ buttonName }) => {
  return (
    <button className={styles.button} type="button">
      <p>{buttonName}</p>
    </button>
  );
};
