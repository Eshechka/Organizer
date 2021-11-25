import React from "react";
import styles from "./ProfilePage.module.scss";
import PageName from "../Todo/PageName/PageName";
import Button from "../Todo/Management/Button/Button";
// import WindowProfile from "./WindowPfile/WindowProfile";
import DateTimeContainer from "../Todo/DateTime/DateTimeContainer";

function ProfilePage() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__pagetitle}>
          <PageName text="Профиль" />
        </div>
        <div className={styles.profile__datetime}>
          <DateTimeContainer />
        </div>

        <h2 className={styles.profile__title}>Добро пожаловать, Максим</h2>
        <div className={styles.changepassword}>
          <p className={styles.changepassword__text}>Ваш пароль:</p>
          <input className={styles.changepassword__input} type="password" />
          <div className={styles.changepassword__button}>
            <Button text="Изменить" />
          </div>
        </div>
        <div className={styles.changepassword__submit}>
          <Button text="Удалить профиль" color="#141F84" />
        </div>
        {/*пока нет функционала, поэтому я убрал окно что бы оно не показывалось*/}
        {/*{<WindowProfile/>}*/}
      </div>
    </div>
  );
}

export default ProfilePage;
