import React from "react";
import styles from "../../../src/styles/UI/btn.module.css";

const Btn = ({ text, inst, href, onClick }) => {
  return (
    <a href={href} onClick={onClick} className={styles.button}>
      {inst ? <img src={inst} alt="" /> : ""}
      {text}
    </a>
  );
};

export default Btn;
