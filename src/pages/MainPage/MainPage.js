import React, {useEffect} from "react";
import el from "../../img/backround_element.png";
import styles from "./MainPage.module.scss";
import Form from "../../modals/Form/Form";
import {useTransition, animated} from "react-spring";
function MainPage({
  isOpenAuthForm,
  isSignIn,
  onCancel,
  datetime,
  time,
  day,
  move,
  positionXImg,
  registrOrlogin,
}) {
  useEffect(() => {
    let TimerId = setInterval(datetime, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });
  const animation = useTransition( isOpenAuthForm, {
    from: {
      opacity: 0,
      top: `${0}%`,
    },
    enter: {
      opacity: 1,
      top: `${26}%`,
    },
    leave: {
      opacity: 0,
      top: `${0}%`,
    },
  });
  return (
    <div onMouseMove={move} onTouchMove={move} className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__greeting}>
          <div className={styles.main__datetime}>
            <p>{time}</p>
            <p>{day}</p>
          </div>
          <p className={styles.main__info}>
            Войдите или зарегистрируйтесь, чтобы начать пользоваться приложением
          </p>
        </div>
      </div>
      <img
        className={styles.main__background}
        style={{transform: `translateX(${positionXImg}px)`}}
        src={el}
        alt="png"
      />
      {animation((props) =>
        isOpenAuthForm ? (
          <animated.div className={styles.window} style={props}>
            <Form
              isSignIn={isSignIn}
              clickOnSign={registrOrlogin}
              clickOnExit={onCancel}
            />
          </animated.div>
        ) : null
      )}
    </div>
  );
}

export default MainPage;
