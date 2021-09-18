import React from "react";
import Styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <section className={Styles.wrapper}>
      <h4>Users</h4>
      <button className={Styles.button}>Add</button>
    </section>
  );
};

export default Navigation;
