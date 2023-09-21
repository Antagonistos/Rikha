import React, { useState } from "react";
import styles from "../../styles/UI/controller.module.css";
const Controller = ({ setCount, count, style }) => {
  const [countController, setCountController] = useState(1);

  return (
    <div style={style} className={styles.controller}>
      <button
        onClick={
          setCount
            ? () => setCount(count - 1)
            : () => setCountController(countController - 1)
        }
      >
        -
      </button>
      <div className="">{count ? count : countController}</div>
      <button
        onClick={
          setCount
            ? () => setCount(count + 1)
            : () => setCountController(countController + 1)
        }
      >
        +
      </button>
    </div>
  );
};

export default Controller;
