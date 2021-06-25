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
            <tr key={item.id}>
              <td className="item-container">
                <div className="item-details-container">
                  <div className="item-details">
                    <img
                      src={item.img_url}
                      alt="item"
                      height="40px"
                      width="40px"
                    />
                    <p>{item.name}</p>
                  </div>
                  <button
                    className="btn remove ms-auto"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </td>
              <td className="text-center">
                <span className="input-group" style={{ maxWidth: '130px' }}>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={(e) => {
                      if (item.qty > 1) updateQuantity(item.id, item.qty - 1);
                      else quantityError();
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control"
                    value={item.qty}
                    name="qty"
                    onChange={(e) => {
                      e.preventDefault();
                      if (e.target.value > 10 || e.target.value < 0)
                        quantityError();
                      updateQuantity(item.id, e.target.value);
                    }}
                    onBlur={(e) => {
                      if (
                        e.target.value === '' ||
                        e.target.value > 10 ||
                        e.target.value < 0
                      ) {
                        updateQuantity(item.id, 1);
                        quantityError();
                      }
                    }}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={(e) => {
                      if (item.qty < 10) updateQuantity(item.id, item.qty + 1);
                      else quantityError();
                    }}
                  >
                    +
                  </button>
                </span>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
