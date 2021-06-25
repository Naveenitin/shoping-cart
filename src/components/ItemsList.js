import Item from './Item';

const ItemsList = ({
  items,
  updateQuantity,
  removeItem,
  quantityError,
  reset,
}) => {
  if (items.length === 0)
    return (
      <div className="container text-center">
        <h3>Your Cart is Empty :(</h3>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
    );

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>&lt; items({items.length})</th>
            <th className="text-center">Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              quantityError={quantityError}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
