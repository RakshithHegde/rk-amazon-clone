import React from "react";
import "../css/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <nav className="header">
        {/*logo on left -> img */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <Link to="/location" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello RK</span>
            <span className="header__optionLineTwo">Select your location</span>
          </div>
        </Link>

        {/*search box*/}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/*3 links(sign in,orders,prime)*/}
        <div className="header__nav">
          {/*1 link*/}
          <Link to="/login-page" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello RK</span>
              <span className="header__optionLineTwo">Sign in</span>
            </div>
          </Link>
          {/*2 link*/}
          <Link to="/" className="header__link">
            {" "}
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/*3 link*/}
          <Link to="/" className="header__link">
            {" "}
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/*4 link*/}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket header__option">
              <span className="header__basketCount header__optionLineTwo">
                {basket.length}
              </span>
              <ShoppingCartRoundedIcon />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
