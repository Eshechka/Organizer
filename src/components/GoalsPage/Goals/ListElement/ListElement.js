import React from 'react';
import styles from './ListElement.module.css'
function ListElement({el}) {
    return (
        <div className={styles.el}>
            <p>{el.title}</p>
            <button/>
        </div>
    );
}

export default ListElement;