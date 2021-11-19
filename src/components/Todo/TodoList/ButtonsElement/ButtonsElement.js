import React from 'react';
import styles from './ButtonsElement.module.css'
function ButtonsElement() {
    return (
        <div className={styles.flex}>
            <button id='1' className={styles.yes}/>
            <button id='2' className={styles.delete}/>
        </div>
    );
}

export default ButtonsElement;