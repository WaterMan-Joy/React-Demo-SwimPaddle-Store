import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React, { Fragment } from "react";

// App(onCloseApp) => Cart(onCloseCart) => Modal(onCloseModal) => Backdrop(onClick)

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
