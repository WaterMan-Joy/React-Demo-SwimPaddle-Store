import Card from "../UI/Card";
import classes from "./AvailablePaddle.module.css";
import PaddleItem from "./PaddleItem/PaddleItem";

const DUMMY_PADDLES = [
  {
    id: "p1",
    name: "red paddle",
    description: "paddle red",
    price: 22.99,
  },
  {
    id: "p2",
    name: "black paddle",
    description: "paddle black",
    price: 16.5,
  },
  {
    id: "p3",
    name: "blue paddle",
    description: "paddle blue",
    price: 12.99,
  },
  {
    id: "p4",
    name: "green paddle",
    description: "paddle green",
    price: 18.99,
  },
];

// 더미데이터를 map()으로 풀어서 그 안에 자식 컴포넌트 PaddleItem 을 가져온다
const AvailablePaddle = () => {
  const paddleList = DUMMY_PADDLES.map((paddle) => (
    <PaddleItem
      id={paddle.id}
      key={paddle.id}
      name={paddle.name}
      description={paddle.description}
      price={paddle.price}
    />
  ));
  return (
    <section className={classes.paddles}>
      <Card>
        <ul>{paddleList}</ul>
      </Card>
    </section>
  );
};

export default AvailablePaddle;
