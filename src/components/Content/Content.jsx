import React from "react";
import styles from "./content.module.css";
import ItemCard from "../Item/ItemCard";

const Content = ({ products, handleIncreaseItem, handleDecreaseItem }) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <ItemCard
          products={products}
          handleIncreaseItem={handleIncreaseItem}
          handleDecreaseItem={handleDecreaseItem}
        />
      </div>
    </main>
  );
};

export default Content;
