import React from "react";
import styles from "./cartitems.module.css";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";

const CartItems = ({
  products,
  handleItemDecrease,
  handleItemIncrease,
  handleToggle,
  price,
}) => {
  const filteredItems = products.filter((product) => {
    return product.quantity !== 0;
  });

  return (
    <div className={styles.container}>
      <div className={styles.cartContent}>
        <AiOutlineClose
          className={styles.close}
          size={25}
          onClick={handleToggle}
        />
        {filteredItems.length === 0 ? (
          <h2 className={styles.cartEmpty}>Your Cart is Empty</h2>
        ) : (
          <div>
            {filteredItems.map((product) => {
              return (
                <div key={product.id} className={styles.cartItem}>
                  <div className={styles.img}>
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className={styles.content}>
                    <h4>{product.quantity}</h4>
                    <h4 className={styles.price}>${product.price}</h4>
                    <p>{product.name}</p>

                    <Button
                      handleItemDecrease={handleItemDecrease}
                      handleItemIncrease={handleItemIncrease}
                      product={product}
                    />
                  </div>
                </div>
              );
            })}
            <div className={styles.totalContent}>
              <h2>Total: </h2>
              <h2>${price.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
