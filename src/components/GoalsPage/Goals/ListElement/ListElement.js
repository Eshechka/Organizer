import React from 'react';
import styles from './ListElement.module.css'
function ListElement({el,chekTodo}) {
    return (
        <div style={{borderColor:el.borderColor}} className={styles.el}>
            <p>{el.title}</p>
            {el.showButton? <button onClick={()=>chekTodo(el.id)}/>:null}
        </div>
    );
}

export default ListElement;