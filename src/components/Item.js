const Item = ({ item, removeItem, quantityError, updateQuantity }) => {
  return (
    <div className="d-flex flex-row p-0 m-2">
      <div className="item-container flex-fill p-0 m-0 row align-middle">
        <div className="item-details-container d-flex align-middle">
          <div className="m-0 p-0 item-details">
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
      </div>
      <div className="d-flex flex-row p-0 m-0 ms-auto align-center">
        <span className="input-group m-0 p-0">
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
      </div>
      <div className="d-flex align-center price">
        <div>{item.price}</div>
      </div>
    </div>
  );
};

export default Item;
