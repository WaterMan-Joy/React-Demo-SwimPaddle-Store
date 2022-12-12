import React from "react";
import classes from "./PaddleItemForm.module.css";
import Input from "../../UI/Input";

// 부모 컴포넌트인 PaddleItem 에게 물려받은 id 를 연결해야 한다
const PaddleItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
        label={props.id}
      ></Input>
      <button>+ADD</button>
    </form>
  );
};

export default PaddleItemForm;
