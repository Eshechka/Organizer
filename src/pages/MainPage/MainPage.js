import React, {useEffect} from "react";
import el from "../../img/backround_element.png";
import styles from "./MainPage.module.scss";
import Form from "../../modals/Form/Form";
import {useTransition, animated} from "react-spring";

function MainPage({
                      isSignIn,
                      onCancel,
                      datetime,
                      time,
                      day,
                      move,
                      positionXImg,
                      registrOrlogin,
                      password,
                      login,
                      valuePassword,
                      valueLogin,
                      errorsData,
                       touch
                  }) {
    useEffect(() => {
        const TimerId = setInterval(datetime, 1000);
        return () => {
            clearInterval(TimerId);
        };
    });

    const animation = useTransition(isSignIn, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
    });
    return (
        <div onMouseMove={move} onTouchMove={touch} className={styles.main}>
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
            {animation((props,toggle) =>
               toggle!==null? (
                    <animated.div className={styles.window} style={props}>
                        <Form
                            errors={errorsData}
                            changedPassword={valuePassword}
                            changedLogin={valueLogin}
                            password={password}
                            login={login}
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
