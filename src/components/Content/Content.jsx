import React from "react";
import styles from "./content.module.css";
import ItemCard from "../Item/ItemCard";

const Content = ({ products, handleItemIncrease, handleItemDecrease }) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <ItemCard
          products={products}
          handleItemIncrease={handleItemIncrease}
          handleItemDecrease={handleItemDecrease}
        />
      </div>
    </main>
  );
};

export default Content;
