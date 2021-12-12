import React from "react";
import styles from "./GoalsPage.module.scss";
import PageName from "../../components/PageName/PageName";
import ManagementGoals from "../../components/ManagementGoals/ManagementGoals";
import TodoWindow from "../../modals/TodoWindow/TodoWindow";
import DateTimeContainer from "../../components/DateTime/DateTimeContainer";
import Goals from "../../components/Goals/Goals";
function GoalsPage({
  errors,
  checkWindow,
  dayFunction,
  openWindow,
  addGoals,
  goals,
  valueWindow,
  changeTitle,
  changeDate,
  changeTodo,
  valueTitle,
  valueDate,
  valueTodo,
  chekTodo,
  deleteGoal,
  clearGoals,
}) {
  let objectForInput = {
    changeTodo,
    changeTitle,
    changeDate,
    valueTodo,
    valueDate,
    valueTitle,
    errors,
  };
  return (
    <div className={styles.goals}>
      <div className={styles.goals__container}>
        <div className={styles.goals__pagetitle}>
          <PageName text="Список целей" />
        </div>

        <div className={styles.goals__datetime}>
          <DateTimeContainer />
        </div>

        <div className={styles.goals__management}>
          <ManagementGoals
            click={openWindow}
            inputs={objectForInput}
            clearGoals={clearGoals}
          />
        </div>

        <ul className={styles.price}>
          {goals.map((el) => (
            <li key={el.id}>
              <Goals
                chekTodo={chekTodo}
                dayFunction={dayFunction}
                goal={el}
                deleteGoal={deleteGoal}
              />
            </li>
          ))}
        </ul>

        {valueWindow === true ? (
          <TodoWindow
            text="цель"
            check={checkWindow}
            push={addGoals}
            window={openWindow}
          />
        ) : null}
      </div>
    </div>
  );
}

export default GoalsPage;
