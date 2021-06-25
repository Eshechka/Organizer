import React from 'react';
import styles from './Goals.module.css'
import Info from "../../../Todo/TodoList/Info/Info";
import ListElement from "./ListElement/ListElement";
function Goals(props) {
    return (
        <div className={styles.element}>
            <div className={styles.wap}>
                <p className={styles.text}>В процессе</p>
                <h3 className={styles.title}>Купить дом</h3>
                <p className={styles.text}>0%</p>
            </div>
            <div className={styles.info}>
            {/*<Infoday={{text:'7днй',color:'yellow'}} start='нет прописано' end='не прописано'/>*/}
            </div>
            <ul className={styles.list}>
                <ListElement/>
                <ListElement/>
                <ListElement/>
                <ListElement/>
            </ul>
        </div>
    );
}

export default Goals;