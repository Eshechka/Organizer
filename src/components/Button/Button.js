import React from "react";
import styles from "./Button.module.scss";

function Button({ text, color, click }) {
  return (
    <button
      onClick={click}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default Button;
