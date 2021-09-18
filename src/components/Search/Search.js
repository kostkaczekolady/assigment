import React from "react";
import Styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={Styles.wrapper}>
      <div>Search by name: </div>
      <input className={Styles.input} />
      <button className={Styles.clearButton}> Clear</button>
    </div>
  );
};

export default Search;
