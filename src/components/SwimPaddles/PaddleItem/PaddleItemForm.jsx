import React from "react";
import classes from "./PaddleItemForm.module.css";
import Input from "../../UI/Input";

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
