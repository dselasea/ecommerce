import React from "react";
import styles from "./content.module.css";
import ItemCard from "../Item/ItemCard";

const Content = ({ products, setItemQuantity, itemQuantity, setPrice }) => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* {products.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            setItemQuantity={setItemQuantity}
            itemQuantity={itemQuantity}
            setPrice={setPrice}
          />
        ))} */}
        <ItemCard products={products} />
      </div>
    </main>
  );
};

export default Content;
