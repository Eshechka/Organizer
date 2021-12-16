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
    <>
      <h2 className={styles.title}>
        Изменение {type === "login" ? "логина:" : "пароля"}
      </h2>
      <div className={styles.block}>
        <label className={styles.label}>
          {type === "login" ? "Ваш логин:" : "Ваш пароль"}
        </label>
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.block}>
        <label className={styles.label}>
          {type === "login" ? "Ваш новый логин:" : "Ваш новый пароль"}
        </label>
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.buttons}>
        <Button text="Изменить" click={clickYes} />
        <Button text="Отмена" click={clickNo} />
      </div>
    </>
  );
}

export default WindowProfile;
