import React from "react";
import styles from "./Form.module.css";
function Form({isSignIn, clickOnSign, clickOnExit}) {
  return (
    <>
      <h2>{isSignIn ? "Вход" : "Регистрация"}</h2>
      <div className={styles.information}>Такой пользователь уже есть</div>
      <form onSubmit={(e) => clickOnSign(e, isSignIn)}>
        <input type="text" placeholder="Логин" name="login" />
        <input type="password" placeholder="Пароль" name="password" />
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
