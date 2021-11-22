import React from 'react';
import styles from './Goals.module.css'
import Info from './../../Todo/TodoList/Info/Info'
import ListElement from "./ListElement/ListElement";
function Goals({goal,dayFunction,chekTodo}) {
    return (
        <div className={styles.element}>
            <div className={styles.wap}>
                <p style={{color:goal.state.color}} className={styles.text}>{goal.state.text}</p>
                <h3 className={styles.title}>{goal.title}</h3>
                <p style={{color:goal.colorPercent}} className={styles.text}>{`${goal.percent}%`}</p>
            </div>
            <div className={styles.info}>
            {goal.day===null? null:<Info dayFunction={dayFunction} id={goal.id} day={goal.day} start={goal.DateStart} end={goal.DateEnd}/>}
            </div>
            <ul className={styles.list}>
                {goal.todo.map(el=><li key={el.id}><ListElement chekTodo={chekTodo} el={el}/></li>)}
            </ul>
        </div>
    );
}

export default Goals;