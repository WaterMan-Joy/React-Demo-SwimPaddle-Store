import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Paddle from "./components/SwimPaddles/Paddle";

// App(onShowCart) => Header(onClickCart) => HeaderCartButton(onClick)
// App(onCloseCart) => Cart(onClose)

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("showCartHandler click");
    setCartIsShown(true);
    console.log(cartIsShown);
  };

  const hideCartHandler = () => {
    console.log("hideCartHandler click");
    setCartIsShown(false);
    console.log(cartIsShown);
  };

  return (
    <Fragment>
      {/* (if (cartIsShown) {<Cart onCloseCart={hideCartHandler} />}) */}
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Paddle />
      </main>
    </Fragment>
  );
}

export default App;
