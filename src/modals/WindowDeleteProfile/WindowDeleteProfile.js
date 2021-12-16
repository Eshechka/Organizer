import React from "react";
import styles from "./WindowDeleteProfile.module.scss";
import Button from "../../components/Button/Button";
const WindowDeleteProfile = ({clickYes, clickNo}) => {
  return (
    <div className={styles.window}>
      <p className={styles.window__title}>
        Вы действительной хотите удалить профиль?
      </p>
      <p className={styles.window__text}>
        В этом случае все созданные цели и задачи будут удалены
      </p>
      <div className={styles.window__buttons}>
        <Button text="да" click={clickYes} />
        <Button text="нет" click={clickNo} color="#192386" />
      </div>
    </div>
  );
};

export default WindowDeleteProfile;
