import React from 'react';
import styles from './Form.module.css'
import {useSpring, animated} from "react-spring";


function Form({title, buttonTitle}) {

    let effect =useSpring({
        from: {opacity:0, top:`${0}%`},
        to: {opacity:1, top:`${26}%`},
        config: {duration:300}
        }
    )

    return (


        <animated.div className={styles.window} style={effect} >
            <h2>{title}</h2>
            <div className={styles.information}>Такой пользователь уже есть</div>
            <form>
                <input type="text" placeholder="Логин" name="login"/>
                <input type="password" placeholder="Пороль" name="password"/>
                <button>{buttonTitle}</button>
            </form>
            <button>Отмена</button>
        </animated.div>


    );
}

export default Form;