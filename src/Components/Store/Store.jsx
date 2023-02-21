import React from "react";
import Merch from "./Merch";
import Music from "./Music";
import styles from "./Store.module.css";

const Store = () => {
  return (
    <div className={styles.store}>
      <Music />
      <Merch />
    </div>
  );
};

export default Store;
