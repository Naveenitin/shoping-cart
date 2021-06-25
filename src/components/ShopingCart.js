import { useState } from 'react';
import ItemsList from './ItemsList';
import TotalAmount from './TotalAmount';

const ShopingCart = ({ data }) => {
  // Assigning all items qty 1
  data.forEach((item) => {
    item.qty = 1;
  });

  const [items, setItems] = useState(data);

  const updateQuantity = (id, update) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: update };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const reset = () => {
    setItems(data);
  };

  return (
    <div className="container mt-3">
      <div className="header">
        <h1>Order Summary</h1>
      </div>
      <div className="row g-2">
        <div className="col-12 col-md-8">
          <ItemsList
            items={items}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        </div>
        <div className="col-12 col-md-4">
          <TotalAmount reset={reset} items={items} ms-auto />
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
