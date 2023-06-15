import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./header.module.css";

const Header = ({ itemQuantity, price, handleToggle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Mallmart</h3>
        </div>
        <div className={styles.cart} onClick={handleToggle}>
          <FaShoppingCart size={30} />
          <h6 className={styles.items}>{itemQuantity}</h6>
          <h6 className={styles.itemsPrice}>${price.toFixed(2)}</h6>
        </div>
      </div>
    </header>
  );
};

export default Header;
