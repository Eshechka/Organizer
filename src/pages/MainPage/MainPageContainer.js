import {connect} from "react-redux";
import MainPage from "./MainPage";
import {
    changedLogin,
    changedPassword, inputEmailChange,
    removeSignIn,
    requestAuthorization,
    requestRegistration, toggleResetWindow,
} from "../../store/actions/usersActions";
import {updateDateTime} from "../../store/actions/globalTimeActions";
import {moveAnimation} from "../../store/actions/backgroundAnimationActions";

const mapStateToProps = (state) => {
    return {
        errorsData: state.users.errorsData,
        password: state.users.inputPassword,
        login: state.users.inputlogin,
        isSignIn: state.users.isSignIn,
        time: state.globalDateTime.datetime.time,
        day: state.globalDateTime.datetime.day,
        positionXImg: state.background.backgroundEffect.preElementX,
        email:state.users.reset.inputEmail,
        errorEmail:state.users.reset.error,
        resetWindow:state.users.reset.resetWindow
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
         dispatch(moveAnimation({positionX: e?.clientX }));
        },
        touch: (e) => {
            dispatch(moveAnimation({positionX: e?.targetTouches[0].clientX}));
        },
        registrOrlogin: (e, isSignUP) => {
            e.preventDefault();
            switch (isSignUP) {
                case false:
                    dispatch(requestAuthorization())
                    break;
                case true:
                    dispatch(requestRegistration())
                    break;
                default:
                    break;
            }
        },
        onCancel() {
            dispatch(removeSignIn());
        },
        valueLogin(e) {
            dispatch(changedLogin({text: e.target.value}))
        },
        valuePassword(e) {
            dispatch(changedPassword({text: e.target.value}))
        },
        changeEmail(text){
            dispatch(inputEmailChange({text}))
        },
        toggleReset() {
            dispatch(toggleResetWindow())
        }
    };
};

const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MainPage);

export default MainPageContainer;
