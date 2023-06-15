import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { products } from "./data";
import CartItems from "./components/CartItems/CartItems";

function App() {
  // const [storeItems, setStoreItems] = useState(products);
  const [price, setPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [storeItems, dispatch] = useReducer(cartReducer, products);

  useEffect(() => {
    const productQuantity = storeItems.map((product) => {
      return product.quantity;
    });

    const productTotal = productQuantity.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);

    setItemQuantity(productTotal);
  }, [handleDecreaseItem, handleIncreaseItem]);

  function handleIncreaseItem(productId) {
    dispatch({
      type: "increased",
      id: productId,
    });
  }

  function handleDecreaseItem(productId) {
    dispatch({
      type: "decreased",
      id: productId,
    });
  }

  function cartReducer(storeItems, action) {
    switch (action.type) {
      case "increased": {
        const quantity = storeItems.map((product) => {
          if (product.id === action.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });

        storeItems.map((product) => {
          if (product.id === action.id) {
            setPrice((prevPrice) => prevPrice + product.price);
          }
        });

        return quantity;
      }
      case "decreased": {
        const quantity = storeItems.map((product) => {
          if (product.id === action.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });

        storeItems.map((product) => {
          if (product.id === action.id) {
            setPrice((prevPrice) => prevPrice - product.price);
          }
        });

        return quantity;
      }

      default: {
        throw Error("Unknown Error: " + action.type);
      }
    }
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <main>
      <Header
        price={price}
        itemQuantity={itemQuantity}
        handleToggle={handleToggle}
      />
      <Content
        products={storeItems}
        handleDecreaseItem={handleDecreaseItem}
        handleIncreaseItem={handleIncreaseItem}
      />
      {toggle && (
        <CartItems
          products={storeItems}
          handleDecreaseItem={handleDecreaseItem}
          handleIncreaseItem={handleIncreaseItem}
          product={storeItems}
          handleToggle={handleToggle}
          price={price}
        />
      )}
    </main>
  );
}

export default App;
