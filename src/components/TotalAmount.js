const TotalAmount = ({ reset, items }) => {
  const bill = { price: 0, discount: 0, typeDiscount: 0 };
  items.forEach((item) => {
    let price = item.qty * item.price;
    bill.price += price;
    bill.discount += price * 0.15;
    if (item.type === 'fiction') bill.typeDiscount += price * 0.15;
  });

  return (
    <div className="border border-3 total-amount-container">
      <div className="p-2">
        <strong>Total</strong>
        <hr />
        <div className="d-flex">
          <div>Items ({items.length})</div>
          <span className="price-container d-flex m-0 p-0  ms-auto">
            <span className="m-0 p-0">:</span>
            <span className="m-0 p-0 ms-auto">₹{bill.price}</span>
          </span>
        </div>
        <br />
        <div className="d-flex">
          <div>Discount</div>
          <div className="price-container d-flex m-0 p-0 ms-auto">
            <span className="m-0 p-0">:</span>
            <span className="m-0 p-0 ms-auto">-₹{bill.discount}</span>
          </div>
        </div>
        <div className="d-flex">
          <div>Type discount</div>
          <div className="price-container d-flex m-0 p-0 ms-auto">
            <span className="m-0 p-0">:</span>
            <span className="m-0 p-0 ms-auto">-₹{bill.typeDiscount}</span>
          </div>
        </div>
      </div>
      <div className="total-amount p-2 d-flex">
        <div>Items ({items.length})</div>
        <div className="price-container d-flex m-0 p-0 ms-auto">
          <span className="m-0 p-0">:</span>
          <span className="m-0 p-0 ms-auto">
            ₹{bill.price - bill.discount - bill.typeDiscount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
