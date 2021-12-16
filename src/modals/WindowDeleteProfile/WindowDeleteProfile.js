import React from "react";
import styles from "./WindowDeleteProfile.module.scss";
import Button from "../../components/Button/Button";
const WindowDeleteProfile = ({clickYes, clickNo}) => {
  return (
    <>
      <p className={styles.title}>
        Вы действительной хотите удалить профиль?
      </p>
      <p className={styles.text}>
        В этом случае все созданные цели и задачи будут удалены
      </p>
      <div className={styles.buttons}>
        <Button text="да" click={clickYes} />
        <Button text="нет" click={clickNo} color="#192386" />
      </div>
    </>
  );
};

export default WindowDeleteProfile;
