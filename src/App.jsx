import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { products } from "./data";

function App() {
  const [storeItems, setStoreItems] = useState(products);
  const [price, setPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div>
      <Header price={price} itemQuantity={itemQuantity} />
      <Content
        products={storeItems}
        setItemQuantity={setItemQuantity}
        itemQuantity={itemQuantity}
        setPrice={setPrice}
      />
    </div>
  );
}

export default App;
