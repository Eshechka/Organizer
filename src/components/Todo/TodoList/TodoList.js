import React from 'react';
import styles from './TodoList.module.css'
import Info from "./Info/Info";
import ButtonsElement from "./ButtonsElement/ButtonsElement";

function TodoList({el, dayFunction, click, id}) {

    return (
        <div onClick={(e) => click(e, id)} className={styles.element}
             style={{boxShadow: `inset 0 0 10px ${el.border}`}}>
            <p className={styles.info} style={{color: el.state.color}}>{el.state.text}</p>
            <h3>{el.title}</h3>
            {el.day === null ? null :
                <Info dayFunction={dayFunction} id={el.id} day={el.day} start={el.DateStart} end={el.DateEnd}/>}
            <ButtonsElement/>
        </div>
    );
}

export default TodoList;