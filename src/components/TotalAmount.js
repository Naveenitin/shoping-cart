import PriceContainer from './PriceContainer';

const TotalAmount = ({ items }) => {
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
        <PriceContainer desc={`Items(${items.length})`} amount={bill.price} />
        <br />
        <PriceContainer desc={`Discount`} amount={bill.discount} />
        <PriceContainer desc={`Type discount`} amount={bill.typeDiscount} />
      </div>
      <div className="total-amount p-2">
        <PriceContainer desc={`Order total`} amount={bill.typeDiscount} />
      </div>
    </div>
  );
};

export default TotalAmount;
