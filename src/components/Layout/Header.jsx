import React, { Fragment } from "react";
import classes from "./Header.module.css";
import paddleImages from "../assets/paddle3.avif";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Paddle Store</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={paddleImages} alt="swim training paddle" />
      </div>
    </Fragment>
  );
};

export default Header;
