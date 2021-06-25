const Item = ({ item, removeItem, quantityError, updateQuantity }) => {
  return (
    <tr key={item.id}>
      <td className="item-container">
        <div className="item-details-container">
          <div className="item-details">
            <img src={item.img_url} alt="item" height="40px" width="40px" />
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
              if (e.target.value > 100) {
                quantityError();
                updateQuantity(item.id, 100);
              } else if (e.target.value < 0) {
                quantityError();
                updateQuantity(item.id, 1);
              } else updateQuantity(item.id, e.target.value);
            }}
            onBlur={(e) => {
              if (
                e.target.value === '' ||
                e.target.value > 100 ||
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
              if (item.qty < 100) updateQuantity(item.id, item.qty + 1);
              else quantityError();
            }}
          >
            +
          </button>
        </span>
      </td>
      <td>{item.price}</td>
    </tr>
  );
};

export default Item;
