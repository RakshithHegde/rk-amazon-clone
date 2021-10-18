import React from "react";
import "../css/CheckOut.css";
import { useStateValue } from "./StateProvider";
function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB323492668_.jpg"
        alt="alt"
      />
    </div>
  );
}

export default CheckOut;
