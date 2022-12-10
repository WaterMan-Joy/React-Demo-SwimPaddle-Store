import React, { Fragment } from "react";
import classes from "./PaddleItem.module.css";

const PaddleItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Fragment>
      <li className={classes.paddle}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </li>
    </Fragment>
  );
};

export default PaddleItem;
