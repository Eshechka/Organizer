import React from "react";
import styles from "./Todo.module.scss";
import PageName from "./PageName/PageName";
import TodoList from "./TodoList/TodoList";
import TodoWindow from "./TodoWindow/TodoWindow";
import DateTimeContainer from "./DateTime/DateTimeContainer";
import ManagementContainer from "./Management/ManagementContainer";

function Todo({
  valueWindow,
  todoList,
  dayFunction,
  click,
  window,
  push,
  check,
}) {
  return (
    <div className={styles.todolist}>
      <div className={styles.todolist__container}>
        <div className={styles.todolist__title}>
          <PageName text="Список дел" />
        </div>
        <div className={styles.todolist__datetime}>
          <DateTimeContainer />
        </div>
        <ManagementContainer />

        <ul className={styles.todolist__list}>
          {todoList.map((el) => (
            <li key={el.id} className={styles.todolist__item}>
              <TodoList
                id={el.id}
                click={click}
                dayFunction={dayFunction}
                el={el}
              />
            </li>
          ))}
        </ul>

        {valueWindow === true ? (
          <TodoWindow check={check} push={push} window={window} />
        ) : null}
      </div>
    </div>
  );
}

export default Todo;
