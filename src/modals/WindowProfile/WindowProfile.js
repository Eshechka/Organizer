import React from "react";
import Button from "./../../components/Button/Button";
import styles from "./WindowProfile.module.scss";

function WindowProfile({
  type = "login",
  clickYes = Function.prototype,
  clickNo = Function.prototype,
}) {
  console.log("type = ", type);
  return (
    <div className={styles.window}>
      <h2 className={styles.window__title}>
        Изменение {type === "login" ? "логина:" : "пароля"}
      </h2>
      <div className={styles.window__block}>
        <label className={styles.window__label}>
          {type === "login" ? "Ваш логин:" : "Ваш пароль"}
        </label>
        <input className={styles.window__input} type="text" />
      </div>
      <div className={styles.window__block}>
        <label className={styles.window__label}>
          {type === "login" ? "Ваш новый логин:" : "Ваш новый пароль"}
        </label>
        <input className={styles.window__input} type="text" />
      </div>
      <div className={styles.window__buttons}>
        <Button text="Изменить" click={clickYes} />
        <Button text="Отмена" click={clickNo} />
      </div>
    </div>
  );
}

export default WindowProfile;
