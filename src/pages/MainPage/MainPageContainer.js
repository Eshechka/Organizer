import {connect} from "react-redux";
import MainPage from "./MainPage";
import {cancel, signIn, signUp} from "../../store/actions/usersActions";
import {updateDateTime} from "../../store/actions/globalTimeActions";
import {moveAnimation} from "../../store/actions/backgroundAnimationActions";

const mapStateToProps = (state) => {
  return {
    isOpenAuthForm: state.users.isOpenAuthForm,
    isSignIn: state.users.isSignIn,
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
      if (e.clientX === undefined && e.targetTouches[0].clientX === undefined) {
        dispatch(moveAnimation({positionX: 0}));
      } else {
        dispatch(
          moveAnimation({positionX: e.clientX || e.targetTouches[0].clientX})
        );
      }
    },
    registrOrlogin: (e, isSignIn) => {
      e.preventDefault();
      switch (isSignIn) {
        case true:
          dispatch(signIn());
          break;
        case false:
          dispatch(signUp());
          break;
        default:
          break;
      }
    },
    onCancel() {
      dispatch(cancel());
    },
  };
};

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export default MainPageContainer;
