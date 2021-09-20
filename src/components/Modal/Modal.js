import React from 'react';
import Styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <section className={Styles.wrapper}>
      <h3 className="title">Add new User</h3>
      <form onSubmit></form>
    </section>
  );
};

export default Modal;
