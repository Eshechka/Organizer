import React, {useEffect} from "react";
import el from "../../img/backround_element.png";
import styles from "./MainPage.module.scss";
import Form from "../../modals/Form/Form";
import {useTransition, animated} from "react-spring";

function MainPage({
                      value,
                      title,
                      buttonTitle,
                      datetime,
                      time,
                      day,
                      move,
                      positionXImg,
                      registrOrlogin
                  }) {

    useEffect(() => {
        let TimerId = setInterval(datetime, 1000);
        return () => {
            clearInterval(TimerId);
        };
    });
    const animation = useTransition(value, {
        from: {
            opacity: 0, top: `${0}%`
        },
        enter: {
            opacity: 1, top: `${26}%`
        },
        leave: {
            opacity: 0, top: `${0}%`
        }
    })
    return (
        <div onMouseMove={move} onTouchMove={move} className={styles.content}>
                <div className={styles.content__container}>
                    <div className={styles.content__container__wap}>
                        <div className={styles.content__container__wap__datetime}>
                            <p>{time}</p>
                            <p>{day}</p>
                        </div>
                        <p className={styles.content__container__wap__info}>
                            Войдите или зарегистрируйтесь чтобы начать пользоваться
                            приложением
                        </p>
                    </div>
                </div>
            <img
                className={styles.el}
                style={{transform: `translateX(${positionXImg}px)`}}
                src={el}
                alt="png"
            />
            {
                animation((props, value) =>
                    value ? <animated.div className={styles.window}  style={props}>
                              <Form click={registrOrlogin} title={title} buttonTitle={buttonTitle}/>
                            </animated.div> : null)
            }
        </div>
    );
}

export default MainPage;
