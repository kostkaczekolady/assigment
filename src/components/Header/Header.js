import React from "react";
import Styles from "./Header.module.scss";
import Search from "../Search/Search";

const Header = () => {
  return (
    <section className={Styles.wrapper}>
      <h3 className="title">List of Users</h3>
      <Search />
    </section>
  );
};

export default Header;
