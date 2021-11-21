import React from "react";
import styles from "./TodoWindow.module.css";
import Button from "../Management/Button/Button";

function TodoWindow({ push, window, check }) {
  return (
    <div className={styles.window}>
      {check === false ? (
        <p className={styles.p}>Хотите добавить дело?</p>
      ) : (
        <p className={styles.p}>
          Хотите добавить дело без
          <span style={{ color: "#e18700" }}> даты начала </span> и{" "}
          <span style={{ color: "#e18700" }}>даты окончания</span>?
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
