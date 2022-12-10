import React, { Fragment } from "react";
import classes from "./Header.module.css";
import swimmingImage from "../assets/swimming1.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Paddle Store</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={swimmingImage} alt="swim training " />
      </div>
    </Fragment>
  );
};

export default Header;
