import React from "react";
import "../css/CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB323492668_.jpg"
          alt="alt"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty</h2>
            <p>please add items in order for it to show in your cart</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Cart</h2>
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>SubTotal</h1>
          {/*<SubTotal />*/}
        </div>
      )}
    </div>
  );
}

export default CheckOut;
