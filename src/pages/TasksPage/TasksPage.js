import React from "react";
import styles from "./TasksPage.module.scss";
import PageName from "../../components/PageName/PageName";
import Task from "../../components/Task/Task";
import TodoWindow from "../../modals/TodoWindow/TodoWindow";
import DateTimeContainer from "../../components/DateTime/DateTimeContainer";
import ManagementTasks from "../../components/ManagementTasks/ManagementTasks";
import {useTransition, animated} from "react-spring";

function TasksPage({
                       valueWindow,
                       todoList,
                       dayFunction,
                       click,
                       window,
                       push,
                       check,
                       title,
                       start,
                       end,
                       changeTitle,
                       changeDateStart,
                       changeDateEnd,
                       click1,
                       window1,
                       errors,
                   }) {
    const animationModal = useTransition(valueWindow, {
        from: {
            opacity: 0,
            top: `${0}%`,
        },
        enter: {
            opacity: 1,
            top: `${40}%`,
        },
        leave: {
            opacity: 0,
            top: `${0}%`,
        },
        expires:true
    })
    return (
        <div className={styles.todolist}>
            <div className={styles.todolist__container}>
                <div className={styles.todolist__pagetitle}>
                    <PageName text="Список дел"/>
                </div>
                <div className={styles.todolist__datetime}>
                    <DateTimeContainer/>
                </div>
                <ManagementTasks
                    title={title}
                    start={start}
                    end={end}
                    changeTitle={changeTitle}
                    changeDateEnd={changeDateEnd}
                    click={click1}
                    changeDateStart={changeDateStart}
                    window={window1}
                    errors={errors}
                />
                <ul className={styles.todolist__list}>
                  {
                    todoList.map(el=>
                        <li  key={el.id} className={styles.todolist__item}>
                          <Task
                              id={el.id}
                              click={click}
                              dayFunction={dayFunction}
                              el={el}
                          />
                        </li>)
                  }
                </ul>
                {
                    animationModal((props,value) =>
                        value ? <animated.div className={styles.todolist__container__window} style={props} >
                                        <TodoWindow text="дело" check={check} push={push} window={window}/>
                                      </animated.div> : null)
                }
            </div>
        </div>
    );
}

export default TasksPage;
