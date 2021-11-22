import React from "react";
import styles from "./TodoWindow.module.css";
import Button from "../Management/Button/Button";

function TodoWindow({ push, window, check,text }) {
  return (
    <div className={styles.window}>
      {check ? (
        <p className={styles.p}>{`Хотите добавить ${text}?`}</p>
      ) : (
        <p className={styles.p}>
            {`Хотите добавить ${text} без `}
          <span style={{ color: "#e18700" }}>учёта времени</span>?
        </p>
      )}
      <div className={styles.f}>
        <Button click={push} text="Да" />
        <Button click={window} text="Нет" />
      </div>
    </div>
  );
}

export default TodoWindow;
