import {connect} from "react-redux";
import Title from "./Title";

let mapStateToProps = (state) => {
    return {
        value: state.titlePage.value,
        title: state.titlePage.form.title,
        buttonTitle: state.titlePage.form.buttonTitle,
        time: state.titlePage.datetime.time,
        day: state.titlePage.datetime.day,
        positionXImg: state.titlePage.backgroundEffect.preElementX,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        datetime:()=>{
            let time
            let day
            let year
            let hours = new Date().getHours(),
                minutes = new Date().getMinutes(),
                dayNow = new Date().getDay(),
                date= new Date().getDate(),
                month= new Date().getMonth(),
                yearNow= new Date().getFullYear(),
                dayRu = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',]
            dayRu.forEach((el, i) => {
                if (dayNow === i) {
                    if (minutes < 10) {
                        time = `${hours}:0${minutes}`
                        day = el
                    } else if (minutes > 10) {
                        time = `${hours}:${minutes}`
                        day = el
                    }
                }
            })
            if(month<10){
                year=`${date}.0${month}.${yearNow} г.`
            }else {
                year=`${date}.${month}.${yearNow} г.`
            }

            dispatch({
                type: 'DATETIME',
                time,
                day,
                year,
            })
        },
        move:(e)=> {

            dispatch({
                type: 'BACKGROUND_EFFECT',
                positionX:e.clientX,
            })
        },
    }
}
let TitleContainer = connect(mapStateToProps,mapDispatchToProps)(Title)
export default TitleContainer