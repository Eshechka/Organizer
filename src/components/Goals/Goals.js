import React from 'react';
import styles from './Goals.module.scss'
import Timer from '../Timer/Timer'
import TaskForGoal from "../TaskForGoal/TaskForGoal";
function Goals({goal,dayFunction,chekTodo,deleteGoal}) {
    console.log(goal)
    return (
        <div className={styles.element}>
            <div className={styles.wap}>
                <p style={{color:goal.state.color}} className={styles.wap__text}>{goal.state.text}</p>
                <h3 className={styles.wap__title}>{goal.title}</h3>
                <p style={{color:goal.colorPercent}} className={styles.wap__text}>{`${goal.percent}%`}</p>
            </div>
            <div className={styles.info}>
            {goal.day===null? null:<Timer dayFunction={dayFunction} id={goal.id} day={goal.day} start={goal.DateStart} end={goal.DateEnd}/>}
            </div>
            <ul className={styles.list}>
                {goal.todo.map(el=><li key={el.id}><TaskForGoal chekTodo={chekTodo} el={el}/></li>)}
            </ul>
            <div className={styles.container}>
            <button className={styles.container__button} onClick={() => deleteGoal(goal.id)} >Удалить</button>
            </div>
        </div>
    );
}

export default Goals;