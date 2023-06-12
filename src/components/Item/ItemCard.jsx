import React, { useState } from "react";
import styles from "./itemcart.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ItemCard = ({ item, itemQuantity, setItemQuantity, setPrice }) => {
  const priceStyle = item.price < 100 ? styles.priceGreen : "";
  const [quantity, setQuantity] = useState(item.quantity);

  function handleItemDecrease() {
    if (itemQuantity < 1 || quantity < 1) {
      return;
    } else {
      setItemQuantity((prevItemQuantity) => prevItemQuantity - 1);
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) => prevPrice - item.price);
    }
  }

  function handleItemIncrease() {
    setItemQuantity((prevItemQuantity) => prevItemQuantity + 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + item.price);
  }

  return (
    <>
      <div className={styles.card}>
        <img className={styles.img} src={item.img} alt={item.name} />
        {quantity < 1 ? (
          <button className={styles.btn} onClick={handleItemIncrease}>
            Add
          </button>
        ) : (
          <button className={styles.btn}>
            <FaMinus onClick={handleItemDecrease} />
            <h4 style={{ margin: "0 1rem" }}>{quantity}</h4>
            <FaPlus onClick={handleItemIncrease} />
          </button>
        )}

        <h4 className={`${styles.price} ${priceStyle}`}>
          <span className={styles.currency}>$ </span>
          {item.price}
        </h4>
        <p className={styles.itemName}>{item.name}</p>
      </div>
    </>
  );
};

export default ItemCard;
