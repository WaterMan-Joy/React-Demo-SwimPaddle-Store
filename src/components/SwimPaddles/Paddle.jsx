import { Fragment } from "react";
import AvailablePaddle from "./AvailablePaddle";
import PaddleSummary from "./PaddleSummary";

const Paddle = () => {
  return (
    <Fragment>
      <AvailablePaddle />
      <PaddleSummary />
    </Fragment>
  );
};

export default Paddle;
