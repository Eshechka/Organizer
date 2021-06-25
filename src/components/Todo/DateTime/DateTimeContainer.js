import {connect} from "react-redux";
import DateTime from "./DateTime";

let mapStateToProps=(state)=>{
    return{
        date: state.titlePage.datetime.year,
        day: state.titlePage.datetime.day,
        time: state.titlePage.datetime.time,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        datetime: () => {
            let time
            let day
            let year
            let hours = new Date().getHours(),
                minutes = new Date().getMinutes(),
                dayNow = new Date().getDay(),
                date = new Date().getDate(),
                month = new Date().getMonth()+1,
                yearNow = new Date().getFullYear(),
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
            if (month < 10) {
                year = `${date}.0${month}.${yearNow} г.`
            } else {
                year = `${date}.${month}.${yearNow} г.`
            }

            dispatch({
                type: 'DATETIME',
                time,
                day,
                year,
            })
        }
    }
}
let DateTimeContainer=connect(mapStateToProps,mapDispatchToProps)(DateTime)
export default DateTimeContainer