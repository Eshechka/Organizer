import React from 'react';
import styles from './Buttons.module.css'
import Button from "./Button/Button";
function Buttons({window,click}) {
    return (
        <div className={styles.wap}>

            <Button click={window} text='Добавить' color='#000000' />
            <Button click={click} text='Отчистить' color='#192386'/>

        </div>
    );
}

export default Buttons;