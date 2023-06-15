import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import styles from "./button.module.css";
const Button = ({ handleItemIncrease, handleItemDecrease, product }) => {
  return (
    <button className={styles.btn}>
      <FaMinus onClick={() => handleItemDecrease(product.id)} />
      <h4 style={{ margin: "0 1rem" }}>{product.quantity}</h4>
      <FaPlus
        onClick={() => {
          handleItemIncrease(product.id);
        }}
      />
    </button>
  );
};

export default Button;
