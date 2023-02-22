import React from "react";
import Merch from "./Merch";
import Music from "./Music";
import T_shirt from "./T_shirt";
import styles from "./Store.module.css";

const Store = () => {
  return (
    <div className={styles.store}>
      <Music />
      <T_shirt />
      <Merch />
    </div>
  );
};

export default Store;
