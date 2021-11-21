import React from "react";
import styles from "./Management.module.scss";
import Inputs from "./Inputs/Inputs";
import Button from "./Button/Button";

function Management({
  title,
  start,
  end,
  changeTitle,
  changeDateStart,
  changeDateEnd,
  click,
  window,
}) {
  return (
    <div className={styles.planner}>
      <Inputs
        title={title}
        start={start}
        end={end}
        changeTitle={changeTitle}
        changeDateStart={changeDateStart}
        changeDateEnd={changeDateEnd}
      />

      <div className={styles.planner__buttons}>
        <Button click={window} text="Добавить" color="#000000" />
        <Button click={click} text="Очистить" color="#192386" />
      </div>
    </div>
  );
}

export default Management;
