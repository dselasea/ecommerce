import React, { useState } from "react";
import styles from "./itemcart.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ItemCard = ({ products, handleItemIncrease, handleItemDecrease }) => {
  return (
    <>
      {products.map((product) => {
        const priceStyle = product.price < 100 ? styles.priceGreen : "";
        return (
          <div className={styles.card} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.name} />
            {product.quantity < 1 ? (
              <button
                className={styles.btn}
                onClick={() => {
                  handleItemIncrease(product.id);
                }}
              >
                Add
              </button>
            ) : (
              <button className={styles.btn}>
                <FaMinus onClick={() => handleItemDecrease(product.id)} />
                <h4 style={{ margin: "0 1rem" }}>{product.quantity}</h4>
                <FaPlus
                  onClick={() => {
                    handleItemIncrease(product.id);
                  }}
                />
              </button>
            )}

            <h4 className={`${styles.price} ${priceStyle}`}>
              <span className={styles.currency}>$ </span>
              {product.price}
            </h4>
            <p className={styles.itemName}>{product.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default ItemCard;
