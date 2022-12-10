import classes from "./Input.module.css";

// 모든 Input 을 만들때 기본 틀
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
