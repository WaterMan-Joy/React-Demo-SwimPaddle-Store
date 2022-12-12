import React, { Fragment } from "react";
import classes from "./Header.module.css";
import swimmingImage from "../assets/swimming1.jpg";
import HeaderCartButton from "./HeaderCartButton";

// App(onShowCart) => Header(onClickCart) => HeaderCartButton(onClick)

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Paddle Store</h1>
        <HeaderCartButton onClickCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={swimmingImage} alt="swim training " />
      </div>
    </Fragment>
  );
};

export default Header;
