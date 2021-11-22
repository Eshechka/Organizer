import React from 'react';
import styles from './ListElement.module.css'
function ListElement({el,chekTodo}) {
    return (
        <div style={{borderColor:el.borderColor,}} className={styles.el}>
            <p style={{
                color:el.borderColor,
                textDecorationLine:el.chek ?'line-through':'none',
                textDecorationColor:'white'
            }}>{el.title}</p>
            {el.showButton? <button onClick={()=>chekTodo(el.id)}/>:null}
        </div>
    );
}

export default ListElement;