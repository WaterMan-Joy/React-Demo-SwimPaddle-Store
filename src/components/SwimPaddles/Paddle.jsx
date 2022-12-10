import { Fragment } from "react";
import AvailablePaddle from "./AvailablePaddle";
import PaddleSummary from "./PaddleSummary";

const Paddle = () => {
  // 2개의 자식 컴포넌트만 받을 것이라 props 를 받지 않아도 된다
  // ex) AvailablePaddle, PaddleSummary
  return (
    <Fragment>
      <AvailablePaddle />
      <PaddleSummary />
    </Fragment>
  );
};

export default Paddle;
