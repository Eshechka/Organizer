import React from 'react';
import styles from './ListElement.module.css'
function ListElement(props) {
    return (
        <div className={styles.el}>
            <p>устроиться на работу</p>
            <button/>
        </div>
    );
}

export default ListElement;