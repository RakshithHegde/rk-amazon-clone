import React from "react";
import "../css/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <Router>
      <nav className="header">
        {/*logo on left -> img */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/*search box*/}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/*3 links(sign in,orders,prime)*/}
        <div className="headerNav">
          {/*1 link*/}
          <Link className="header__link">
            <div className="header__option">
              <span>Hello RK</span>
              <span>Sign in</span>
            </div>
          </Link>
          {/*2 link*/}
          <Link></Link>
          {/*3 link*/}
          <Link></Link>
          {/*4 link*/}
        </div>
        {/*basket or cart */}
      </nav>
    </Router>
  );
}

export default Header;
