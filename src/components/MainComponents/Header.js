import React, { useState } from "react";
import "../Css/header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/reducers/cartSlice";

function Header({ setSearch }) {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.loggedInUser);
  var userEmail = null;
  if (loggedInUser.payload !== null) {
    userEmail = loggedInUser.payload.email;
    console.log(userEmail);
  }

  const logout = () => {
    console.log("dispacteed");
    dispatch(
      LogOut({
        type: "LogOut",
        payload: null,
      })
    );
  };
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {userEmail !== null ? (
          <div className="nav__item">
            <span className="nav__itemLineOne">{`Hellow: ${loggedInUser.payload.email}`}</span>
            <Link
              to="/logout"
              className="nav__itemLineTwo"
              style={{ textDecoration: "none" }}
              onClick={logout}
            >
              <span className="nav__itemLineTwo">LogOut</span>
            </Link>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="nav__itemLineTwo">{`Hellow Guest`}</span>
            <div className="nav__item">
              <span className="nav__itemLineTwo">Sin In</span>
            </div>
          </Link>
        )}
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
