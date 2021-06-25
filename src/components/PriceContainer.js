const PriceContainer = ({ amount, desc }) => {
  return (
    <div className="d-flex">
      <div>{desc}</div>
      <span className="price-container d-flex m-0 p-0  ms-auto">
        <span className="m-0 p-0">:</span>
        <span className="m-0 p-0 ms-auto">₹{amount}</span>
      </span>
    </div>
  );
};

export default PriceContainer;
