import React from 'react';
import styles from './Inputs.module.css'

function Inputs({title, start, end, changeTitle, changeDateStart, changeDateEnd}) {

    return (
        <div className={styles.wap}>
            <input onChange={changeTitle} type="text" value={title} placeholder='Название дела'/>
            <label htmlFor="start">Начало:</label>
            <input onChange={changeDateStart} id='start' value={start} type="date"/>
            <label htmlFor="end">Конец:</label>
            <input onChange={changeDateEnd} id='end' value={end} type="date"/>
        </div>
    );
}

export default Inputs;