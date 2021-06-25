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
        <p>
          Items({items.length}) : ₹{bill.price}
        </p>
        <p>
          Dicount: -₹{bill.discount}
          <br />
          type discount : -₹{bill.typeDiscount}
        </p>
      </div>
      <div>
        <div className="total-amount p-2">
          Order Total: ₹{bill.price - bill.discount - bill.typeDiscount}
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
