import React from "react";
import styles from "./Form.module.scss";

function Form({isSignIn, clickOnSign, clickOnExit, password, changedPassword, login, changedLogin, errors}) {
    return (
        <>
            <h2>{isSignIn ? "Вход" : "Регистрация"}</h2>
            <div className={styles.information}>{errors.globalText}</div>
            <form onSubmit={(e) => clickOnSign(e, !isSignIn)}>
                <p style={{color: 'red'}}>{errors.login.text}</p>
                <input className={styles.input} style={{borderColor: errors.login.borderColor}}
                       onChange={changedLogin} value={login} type="text" placeholder="Логин" name="login"/>
                <p style={{color: 'red'}}>{errors.password.text}</p>
                <input className={styles.input} style={{borderColor: errors.password.borderColor}}
                        onChange={changedPassword} value={password} type="password"
                       placeholder="Пароль" name="password"/>
                <button type="submit" className={styles.button}>
                    {isSignIn ? "Войти" : "Зарегистрироваться"}
                </button>
            </form>
            <button onClick={clickOnExit} className={styles.button}>
                Отмена
            </button>
        </>
    );
}

export default Form;
