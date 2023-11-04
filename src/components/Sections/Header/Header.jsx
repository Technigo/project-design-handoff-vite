import React from "react";
import { NavBar } from "../NavBar/NavBar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.headerSection}>
        <NavBar />
      </div>
    </>
  );
};
