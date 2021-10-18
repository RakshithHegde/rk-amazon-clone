import React from "react";
import "../css/CheckOutProduct.css";

function CheckOutProduct({ id, price, title, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProductg__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove item</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
