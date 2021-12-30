import React from "react";
import Button from "./../../components/Button/Button";
import styles from "./WindowProfile.module.scss";

function WindowProfile({
  type = "login",
    clickNo,
    clickYes,
    changeValue,
    inputValue,
    inputConfirmValue,
    changeConfirmValue
}) {
  return (
    <div className={styles.modalChange}>
      <h2 className={styles.modalChange__title}>
        Изменение {type === "login" ? "логина:" : "пароля"}
      </h2>
      <div className={styles.modalChange__block}>
        <label className={styles.modalChange__label}>
          {type === "login" ? "Ваш новый логин:" : "Ваш новый пароль"}
        </label>
        <input className={styles.modalChange__input} onChange={e=>changeValue(e.target.value)} value={inputValue} type="text" />
      </div>
      <div className={styles.modalChange__block}>
        <label className={styles.modalChange__label}>
          {type === "login" ? "Подтвердите логин:" : "Подтвердите пароль"}
        </label>
        <input className={styles.modalChange__input} onChange={e=>changeConfirmValue(e.target.value)} value={inputConfirmValue} type="text" />
      </div>
      <div className={styles.modalChange__buttons}>
        <Button text="Изменить" click={clickYes}  />
        <Button text="Отмена" click={clickNo} />
      </div>
    </div>
  );
}

export default WindowProfile;
