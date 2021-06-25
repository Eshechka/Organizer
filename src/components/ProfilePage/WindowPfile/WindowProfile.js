import React from 'react';
import Button from "../../Todo/Management/Buttons/Button/Button";
import styles from './WindowProfile.module.css'
function WindowProfile(props) {
    return (
        <div className={styles.window}>
            <h2>Изменение логина</h2>
            <div className={styles.wap}>
                <p>Ваш логин:</p>
                <input type="text"/>
            </div>
            <div className={`${styles.wap} ${styles.top}`}>
                <p>Ваш новый логин:</p>
                <input type="text"/>
            </div>
            <div className={styles.flex}>
                <Button text="Изменить"/>
                <Button text="Отмена"/>
            </div>
        </div>
    );
}

export default WindowProfile;