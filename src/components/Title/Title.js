import React, { useEffect } from "react";
import el from "../../img/backround_element.png";
import styles from "./Title.module.css";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";
import Form from "./Form/Form";

function Title({
  value,
  title,
  buttonTitle,
  datetime,
  time,
  day,
  move,
  positionXImg,
}) {
  useEffect(() => {
    console.log("HERE");
    localStorage.setItem("user", JSON.stringify({ id: 2, name: "Максим" }));
  }, []);

  useEffect(() => {
    let TimerId = setInterval(datetime, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });
  return (
    <div onMouseMove={move} className={styles.content}>
      <Container>
        <Row>
          <div className={styles.wap}>
            <div className={styles.datetime}>
              <p>{time}</p>
              <p>{day}</p>
            </div>
            <p className={styles.info}>
              Войдите или зарегистрируйтесь чтобы начать пользоваться
              приложением
            </p>
          </div>
        </Row>
      </Container>
      <img
        className={styles.el}
        style={{ transform: `translateX(${positionXImg}px)` }}
        src={el}
        alt="png"
      />
      {value === true ? <Form title={title} buttonTitle={buttonTitle} /> : null}
    </div>
  );
}

export default Title;
