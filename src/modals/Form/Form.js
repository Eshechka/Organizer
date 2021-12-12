import React from 'react';
import styles from './Form.module.css'
function Form({title, buttonTitle,click}) {

    return (

        <>
            <h2>{title}</h2>
            <div className={styles.information}>Такой пользователь уже есть</div>
            <form>
                <input type="text" placeholder="Логин" name="login"/>
                <input type="password" placeholder="Пороль" name="password"/>
                <button onClick={()=>click(title)}>{buttonTitle}</button>
            </form>
            <button>Отмена</button>
        </>


    );
}

export default Form;