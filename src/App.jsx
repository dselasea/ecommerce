import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { products } from "./data";

function App() {
  const [storeItems, setStoreItems] = useState(products);
  const [price, setPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const productQuantity = storeItems.map((product) => {
      return product.quantity;
    });

    const productTotal = productQuantity.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);

    setItemQuantity(productTotal);
  }, [handleItemDecrease, handleItemIncrease]);

  function handleItemIncrease(productId) {
    const quantity = storeItems.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });

    storeItems.map((product) => {
      if (product.id === productId) {
        return setPrice((prevPrice) => prevPrice + product.price);
      }
    });
    setStoreItems(quantity);
  }

  function handleItemDecrease(productId) {
    const quantity = storeItems.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });

    storeItems.map((product) => {
      if (product.id === productId) {
        return setPrice((prevPrice) => prevPrice - product.price);
      }
    });
    setStoreItems(quantity);
  }

  return (
    <div>
      <Header price={price} itemQuantity={itemQuantity} />
      <Content
        products={storeItems}
        handleItemDecrease={handleItemDecrease}
        handleItemIncrease={handleItemIncrease}
      />
    </div>
  );
}

export default App;
