import React from "react";
import { NavBar } from "../NavBar/NavBar";
import styles from "./HeaderEvents.module.css";

export const HeaderEvents = () => {
  return (
    <>
      <div className={styles.headerSection}>
        <NavBar />
      </div>
    </>
  );
};
