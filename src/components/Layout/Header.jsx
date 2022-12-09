import React, { Fragment } from "react";
import classes from "./Header.module.css";
import paddleImages from "../assets/paddle3.avif";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Paddle Store</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={paddleImages} alt="swim training paddle" />
      </div>
    </Fragment>
  );
};

export default Header;
