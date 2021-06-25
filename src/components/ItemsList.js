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
      <div>
        <div className="itemsList-heading">
          <div className="d-flex flex-row">
            <div>&lt; items({items.length})</div>
            <div className="ms-auto text-center">Qty&emsp;&emsp;&emsp;&emsp;</div>
            <div>Price</div>
          </div>
        </div>
        <div>
          {items.map((item) => (
            <Item
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              quantityError={quantityError}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
