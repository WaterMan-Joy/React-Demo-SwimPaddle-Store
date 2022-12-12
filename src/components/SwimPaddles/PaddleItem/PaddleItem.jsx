import React, { Fragment } from "react";
import classes from "./PaddleItem.module.css";
import PaddleItemForm from "./PaddleItemForm";

// 부모에게 더미데이터가 있기 때문에, 연결 할 데이터가 있기 떄문에 id, name, description, price
// 그리고 id 는 자식 컴포넌트가 있다
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
