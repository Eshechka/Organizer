import {connect} from "react-redux";
import MainPage from "./MainPage";
import {openLogin, openRegistration, signIn, signUp} from "../../store/reducers/usersActions";
import {updateDateTime} from "../../store/reducers/globalTimeActions";
import {moveAnimation} from "../../store/reducers/backgroundAnimationActions";

const mapStateToProps = (state) => {
  return {
    value: state.users.value,
    title: state.users.form.title,
    buttonTitle: state.users.form.buttonTitle,
    time: state.globalDateTime.datetime.time,
    day: state.globalDateTime.datetime.day,
    positionXImg: state.background.backgroundEffect.preElementX,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datetime: () => {
      let time;
      let day;
      let year;
      let hours = new Date().getHours(),
        minutes = new Date().getMinutes(),
        dayNow = new Date().getDay(),
        date = new Date().getDate(),
        month = new Date().getMonth(),
        yearNow = new Date().getFullYear(),
        dayRu = [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота",
        ];
      dayRu.forEach((el, i) => {
        if (dayNow === i) {
          if (minutes < 10) {
            time = `${hours}:0${minutes}`;
            day = el;
          } else if (minutes > 10) {
            time = `${hours}:${minutes}`;
            day = el;
          }
        }
      });
      if (month < 10) {
        year = `${date}.0${month}.${yearNow} г.`;
      } else {
        year = `${date}.${month}.${yearNow} г.`;
      }

      dispatch(updateDateTime({time, day, year}));
    },
    move: (e) => {
      dispatch(moveAnimation({positionX: e.clientX || e.targetTouches[0].clientX,}));
    },
    registrOrlogin: (title) => {
      switch (title) {
        case "Вход":
          dispatch(signIn());
          break;
        case "Регистрация":
          dispatch(signUp());
          break;
        default:
          break;
      }
    },
  };
};

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export default MainPageContainer;
