const ItemsList = ({ items, updateQuantity, removeItem }) => {
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
                    <img src={item.img_url} alt="item" />
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
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
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
                      updateQuantity(
                        item.id,
                        e.target.value ? e.target.value : 0
                      );
                    }}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                      updateQuantity(item.id, item.qty + 1);
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
