import React from 'react';
import Button from "../../components/Button/Button";
import styles from './ResetPage.module.scss'
const ResetPage = () => {
    return (
        <div className={styles.reset}>
            <h1 className={styles.title}>Сброс пароля</h1>
            <div className={styles.flex}>
                <label className={styles.text} htmlFor="new-password">Новый Пароль</label>
                <input className={styles.input} id='new-password' type="password"/>
            </div>
            <div className={styles.button}>
            <Button text='Подтвердить'/>
            </div>
        </div>
    );
};

export default ResetPage;