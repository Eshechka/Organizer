import React from 'react';
import styles from './WindowDeleteProfile.module.scss'
import Button from "../../../TasksPage/ManagementTasks/Button/Button";
const WindowDeleteProfile = () => {
    return (
        <div className={styles.window}>
            <p className={styles.window__text}>Вы действительной хотите удалить профиль?</p>
            <p className={styles.window__text2}>
                В этом случаи все цели и задачи созданные вами будут удалены</p>
            <div className={styles.window__container}>
                <Button text='да'/>
                <Button text='нет' color='#192386'/>
            </div>
        </div>
    );
};

export default WindowDeleteProfile;