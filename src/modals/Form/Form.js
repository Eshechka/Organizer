import React from "react";
import styles from "./Form.module.css";
function Form({isSignIn, clickOnSign, clickOnExit,password,changedPassword,login,changedLogin,errors}) {
  return (
    <>
      <h2>{isSignIn ? "Вход" : "Регистрация"}</h2>
      <div className={styles.information}>{errors.globalText}</div>
      <form onSubmit={(e) => clickOnSign(e, !isSignIn)}>
          <p style={{color:'red'}}>{errors.login.text}</p>
        <input style={{borderColor:errors.login.borderColor}} autoComplete='new-login' onChange={changedLogin} value={login} type="text" placeholder="Логин" name="login" />
          <p style={{color:'red'}}>{errors.password.text}</p>
        <input style={{borderColor:errors.password.borderColor}} autoComplete='new-password' onChange={changedPassword} value={password} type="password" placeholder="Пароль" name="password" />
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
