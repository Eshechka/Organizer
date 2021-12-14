import {connect} from "react-redux";
import MainPage from "./MainPage";

const mapStateToProps = (state) => {
  return {
    value: state.titlePage.value,
    title: state.titlePage.form.title,
    buttonTitle: state.titlePage.form.buttonTitle,
    time: state.titlePage.datetime.time,
    day: state.titlePage.datetime.day,
    positionXImg: state.titlePage.backgroundEffect.preElementX,
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

      dispatch({
        type: "DATETIME",
        time,
        day,
        year,
      });
    },
    move: (e) => {
      dispatch({
        type: "BACKGROUND_EFFECT",
        positionX: e.clientX || e.targetTouches[0].clientX,
      });
    },
    registrOrlogin: (title) => {
      switch (title) {
        case "Вход":
          dispatch({type: "SIGN_IN"});
          break;
        case "Регистрация":
          dispatch({type: "SIGN_UP"});
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
