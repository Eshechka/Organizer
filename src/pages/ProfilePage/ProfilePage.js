import React, {useEffect, useState} from "react";
import styles from "./ProfilePage.module.scss";
import PageName from "./../../components/PageName/PageName";
import Button from "../../components/Button/Button";
import DateTimeContainer from "../../components/DateTime/DateTimeContainer";
import WindowProfile from "../../modals/WindowProfile/WindowProfile";
import WindowDeleteProfile from "../../modals/WindowDeleteProfile/WindowDeleteProfile";
import {useTransition, animated} from "react-spring";
import {useNavigate} from "react-router-dom";
import api from "../../api";

function ProfilePage({deleteCurrentUser, currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenChangeLogin, setIsOpenChangeLogin] = useState(false);
  const animationDelete = useTransition(isOpenDelete, {
    from: {
      opacity: 0,
      top: `${0}%`,
    },
    enter: {
      opacity: 1,
      top: `${56}%`,
    },
    leave: {
      opacity: 0,
      top: `${0}%`,
    },
    expires: true,
  });
  const animationChangePassword = useTransition(isOpenChangePassword, {
    from: {
      opacity: 0,
      top: `${0}%`,
    },
    enter: {
      opacity: 1,
      top: `${56}%`,
    },
    leave: {
      opacity: 0,
      top: `${0}%`,
    },
    expires: true,
  });
  const animationChangeLogin = useTransition(isOpenChangeLogin, {
    from: {
      opacity: 0,
      top: `${0}%`,
    },
    enter: {
      opacity: 1,
      top: `${56}%`,
    },
    leave: {
      opacity: 0,
      top: `${0}%`,
    },
    expires: true,
  });

  function openDeleteUserProfile() {
    setIsOpenDelete(true);
  }
  function handleDeleteUserProfile() {
    deleteCurrentUser();
    setIsOpenDelete(false);
    navigate("/");
  }
  function openChangeUserLogin() {
    setIsOpenChangeLogin(true);
  }
  function openChangeUserPassword() {
    setIsOpenChangePassword(true);
  }
  function handleChangeUserLogin() {
    //посылаем запрос на сервер, получаем нового юзера user={name: 'Лидия'}
    const newUser = {...currentUser, name: "Лидия"};
    setCurrentUser(newUser);
    setIsOpenChangeLogin(false);
  }
  function handleChangeUserPassword() {
    //посылаем запрос на сервер, получаем подтверждение о смене пароля. Скорее всего, закидываем новй токен в localStorage
    setIsOpenChangePassword(false);
  }
  //Пример запроса
  useEffect(()=>{
    api.getUser()
        .then(({data})=>console.log(data))
        .catch((err)=>console.log(err.response?.data.message))
  },[])

  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__pagetitle}>
          <PageName text="Профиль" />
        </div>
        <div className={styles.profile__datetime}>
          <DateTimeContainer />
        </div>

        <h2 className={styles.profile__title}>
          Добро пожаловать, {currentUser?.name ? currentUser.name : ""}
        </h2>
        <div className={styles.changedata}>
          <p className={styles.changedata__text}>Ваш пароль:</p>
          <input
            className={styles.changedata__input}
            value="Maxim23"
            disabled
            type="password"
          />
          <div className={styles.changedata__button}>
            <Button text="Изменить" click={openChangeUserPassword} />
          </div>
        </div>
        <div className={styles.changedata}>
          <p className={styles.changedata__text}>Ваш логин:</p>
          <input
            className={styles.changedata__input}
            disabled
            value={currentUser?.name ? currentUser.name : ""}
            type="text"
          />
          <div className={styles.changedata__button}>
            <Button text="Изменить" click={openChangeUserLogin} />
          </div>
        </div>
        <div className={styles.changedata__submit}>
          <Button
            text="Удалить профиль"
            click={openDeleteUserProfile}
            color={"highlight"}
          />
        </div>
        {animationChangeLogin((props, isOpenChangeLogin) =>
          isOpenChangeLogin ? (
            <animated.div style={props} className={styles.windowChange}>
              <WindowProfile
                type={"login"}
                clickYes={handleChangeUserLogin}
                clickNo={() => {
                  setIsOpenChangeLogin(false);
                }}
              />
            </animated.div>
          ) : null
        )}
        {animationChangePassword((props, isOpenChangePassword) =>
          isOpenChangePassword ? (
            <animated.div style={props} className={styles.windowChange}>
              <WindowProfile
                type={"password"}
                clickYes={handleChangeUserPassword}
                clickNo={() => setIsOpenChangePassword(false)}
              />
            </animated.div>
          ) : null
        )}
        {animationDelete((props, isDelete) =>
          isDelete ? (
            <animated.div style={props} className={styles.windowDelete}>
              <WindowDeleteProfile
                clickYes={handleDeleteUserProfile}
                clickNo={() => setIsOpenDelete(false)}
              />
            </animated.div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
