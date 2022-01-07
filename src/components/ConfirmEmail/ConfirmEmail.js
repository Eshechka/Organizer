import React from 'react';
import styles from './ConfirmEmail.module.scss'
const ConfirmEmail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__flex}>
            <p className={styles.container__flex__text}>Для возможности получать уведомление на почту и восстанавливать логин или пароль подтвердите её</p>
            <button className={styles.container__flex__yes}>Подтвердить</button>
            </div>
        </div>
    );
};

export default ConfirmEmail;