import React from "react";
import logo from "../../img/logo.png";
import styles from "./Header.module.scss";

export default function Header({ user, click }) {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <h1 className={styles.header__title}>Онлайн Органайзер</h1>
        {/* <div className={styles.header__wap}> */}
        {user === true ? (
          <div className={styles.header__auth}>
            <span className={styles.header__logout} onClick={click}>
              Выйти
            </span>
          </div>
        ) : (
          <div className={styles.wap}>
            <p onClick={click}>Вход</p>
            <p onClick={click}>Регистрация</p>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}
