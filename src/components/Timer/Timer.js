import React from "react";
import styles from "./Timer.module.scss";
import { useEffect } from "react";
function Timer({ day, start, end, dayFunction, id }) {
  // useEffect(() => {
  //   dayFunction(start, end, id);
  // }, []); //eslint-disable-line
  return (
      <>
      {day ? <div className={styles.datesinfo}>
              <p className={styles.datesinfo__dates}>{`${start.replaceAll(
                  "-",
                  "."
              )} - ${end.replaceAll("-", ".")}`}</p>
              <div className={styles.datesinfo__remain}>
                  <p className={styles.datesinfo__reamaintext}>осталось:</p>
                  <p
                      className={styles.datesinfo__reamainmeaning}
                      style={{ color: day.color }}
                  >
                      {day.text}
                  </p>
              </div>
          </div>:null}
      </>
  );
}

export default Timer;
