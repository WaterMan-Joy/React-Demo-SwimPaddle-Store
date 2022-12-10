import React, { Fragment } from "react";
import classes from "./PaddleItem.module.css";
import PaddleItemForm from "./PaddleItemForm";

// 부모에게 전달할 데이터가 있기 떄문에 name, description, price
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
        <PaddleItemForm id={props.id} />
      </li>
    </Fragment>
  );
};

export default PaddleItem;
