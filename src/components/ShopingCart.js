import { useEffect, useState } from 'react';
import ItemsList from './ItemsList';
import TotalAmount from './TotalAmount';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopingCart = ({ data }) => {
  // Assigning all items qty 1
  data.forEach((item) => {
    item.qty = 1;
  });

  const [items, setItems] = useState(data);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data'));
    if (localData !== null && localData !== undefined && localData.length !== 0)
      setItems(localData);
    
  }, []);

  const updateQuantity = (id, update) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: update };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('data', JSON.stringify(updatedItems));
  };

  const quantityError = () => {
    toast(`Please enter a valid quantity. [1-10]`, { type: 'error' });
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => {
      if (item.id === id)
        toast(`${item.name} removed from Cart`, { type: 'success' });
      return item.id !== id;
    });
    setItems(updatedItems);
    localStorage.setItem('data', JSON.stringify(updatedItems));
  };

  const reset = () => {
    setItems(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  return (
    <div className="container mt-3">
      <ToastContainer />
      <div className="header">
        <h1>Order Summary</h1>
      </div>
      <div className="row g-2">
        <div className="col-12 col-md-8">
          <ItemsList
            items={items}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            quantityError={quantityError}
            reset={reset}
          />
        </div>
        <div className="col-12 col-md-4">
          <TotalAmount items={items} ms-auto />
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
