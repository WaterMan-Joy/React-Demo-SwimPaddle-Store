import { Fragment } from "react";

import PaddleSummary from "./PaddleSummary";
import AvailablePaddles from "./AvailablePaddle";

const Meals = () => {
  return (
    <Fragment>
      <PaddleSummary />
      <AvailablePaddles />
    </Fragment>
  );
};

export default Meals;
