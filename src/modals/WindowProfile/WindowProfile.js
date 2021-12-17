import React from "react";
import Button from "./../../components/Button/Button";
import styles from "./WindowProfile.module.scss";

function WindowProfile({
  type = "login",
  clickYes = Function.prototype,
  clickNo = Function.prototype,
}) {
  return (
    <div className={styles.modalChange}>
      <h2 className={styles.modalChange__title}>
        Изменение {type === "login" ? "логина:" : "пароля"}
      </h2>
      <div className={styles.modalChange__block}>
        <label className={styles.modalChange__label}>
          {type === "login" ? "Ваш логин:" : "Ваш пароль"}
        </label>
        <input className={styles.modalChange__input} type="text" />
      </div>
      <div className={styles.modalChange__block}>
        <label className={styles.modalChange__label}>
          {type === "login" ? "Ваш новый логин:" : "Ваш новый пароль"}
        </label>
        <input className={styles.modalChange__input} type="text" />
      </div>
      <div className={styles.modalChange__buttons}>
        <Button text="Изменить" click={clickYes} />
        <Button text="Отмена" click={clickNo} />
      </div>
    </div>
  );
}

export default WindowProfile;
