import React, { useState } from "react";
import styles from "./Nav.module.scss";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import { NavLink } from "react-router-dom";

function Nav({ user,}) {
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <div className={styles.nav}>
      <div
        className={styles.nav__container}
      >
        <div className={styles.nav__hamburger}>
          <button
            className={
              activeHamburger
                ? [styles.hamburger, styles.hamburger_active].join(" ")
                : styles.hamburger
            }
            onClick={() => setActiveHamburger(!activeHamburger)}
          >
            <span className={styles.hamburger__stick} />
            <span className={styles.hamburger__stick} />
            <span className={styles.hamburger__stick} />
          </button>
        </div>
        <div
          className={
            activeHamburger
              ? styles.nav__navlist + " " + styles.nav__navlist_active
              : styles.nav__navlist
          }
        >
          <ul className={styles.navlist}>
            <li
              className={styles.navlist__item}
              style={{
                opacity: user === false ? 0.4 : 1,
              }}
            >
              <NavLink to="/do">
                <img src={icon1} alt="icon1" className={styles.navlist__img} />
                <p className={styles.navlist__text}>Список дел</p>
              </NavLink>
            </li>
            <li
              className={styles.navlist__item}
              style={{
                opacity: user === false ? 0.4 : 1,
              }}
            >
              <NavLink to="/purposes">
                <img src={icon2} alt="icon2" className={styles.navlist__img} />
                <p className={styles.navlist__text}>Список целей</p>
              </NavLink>
            </li>
            <li
              className={styles.navlist__item}
              style={{
                opacity: user === false ? 0.4 : 1,
              }}
            >
              <NavLink to="/profile">
                <img src={icon3} alt="icon3" className={styles.navlist__img} />
                <p className={styles.navlist__text}>Профиль</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
