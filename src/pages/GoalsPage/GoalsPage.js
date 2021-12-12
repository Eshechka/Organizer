import React from "react";
import styles from "./GoalsPage.module.scss";
import PageName from "../../components/PageName/PageName";
import ManagementGoals from "../../components/ManagementGoals/ManagementGoals";
import TodoWindow from "../../modals/TodoWindow/TodoWindow";
import DateTimeContainer from "../../components/DateTime/DateTimeContainer";
import Goals from "../../components/Goals/Goals";
import {useTransition,animated} from "react-spring";
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
  const animationModal = useTransition(valueWindow, {
    from: {
      opacity: 0, left: `${0}%`
    },
    enter: {
      opacity: 1, left: `${33}%`
    },
    leave: {
      opacity: 0, left: `${60}%`
    },
    expires:true
  })
  const animationGoals = useTransition(goals, {
    from: {
      opacity: 0, transform: `translateX(${300}px)`
    },
    enter: {
      opacity: 1, transform: `translateX(${0}px)`
    },
    leave: {
      opacity: 0, transform: `translateX(${300}px)`
    },
    expires:true
  })
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
          {
            animationGoals((props,el)=>
                <animated.li style={props} key={el.id} >
                  <Goals
                      chekTodo={chekTodo}
                      dayFunction={dayFunction}
                      goal={el}
                      deleteGoal={deleteGoal}
                  />
                </animated.li>
            )
          }
        </ul>
        {
          animationModal((props,value) =>
              value ? <animated.div className={styles.goals__container__window} style={props} >
                <TodoWindow
                    text="цель"
                    check={checkWindow}
                    push={addGoals}
                    window={openWindow}
                />
              </animated.div> : null)
        }
      </div>
    </div>
  );
}

export default GoalsPage;
