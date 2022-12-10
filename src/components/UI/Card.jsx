import classes from "./Card.module.css";

// 백그라운드 틀만 자신의 자식 컴포넌트에게 적용
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
