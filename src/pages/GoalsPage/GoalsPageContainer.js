import {connect} from "react-redux"
import GoalsPage from "./GoalsPage"
import {
    addGoal,
    changedDate,
    changedTitle,
    changedTodo, clearGoals, clickTask, deleteGoal,
    toggleWindow,
    updateTimer
} from "../../store/reducers/GoalsActions";

let mapStateToProps = (state) => {
    return {
        valueWindow: state.goals.valueWindow,
        valueTitle: state.goals.valueTitle,
        valueDate: state.goals.valueDate,
        valueTodo: state.goals.valueTodo,
        goals: state.goals.goals,
        checkWindow: state.goals.checkWindow,
        errors: state.goals.errors,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: (e) => {
            dispatch(changedTitle({text: e.target.value}))
        },
        changeDate: (e) => {
            dispatch(changedDate({text: e.target.value,}))
        },
        changeTodo: (e) => {
            dispatch(changedTodo({text: e.target.value}))
        },
        addGoals: () => {
            let year = new Date().getFullYear()
            let month = new Date().getMonth() + 1
            let day = new Date().getDate()
            let date

            if (month < 10 && day < 10) {
                date = `${year}-0${month}-0${day}`
            } else {
                if (month < 10) {
                    date = `${year}-0${month}-${day}`
                } else if (day < 10) {
                    date = `${year}-${month}-0${day}`
                } else {
                    date = `${year}-${month}-${day}`
                }
            }
            dispatch(addGoal({date}))
        },
        openWindow: () => {
            dispatch(toggleWindow())
        },
        dayFunction: (start, end, id) => {

            let date1 = new Date(start).getTime()
            let date2 = new Date(end).getTime()
            let t = date2 - date1
            let day = Math.floor(t / (1000 * 60 * 60 * 24))
            let color
            if (day <= 2) {
                color = 'red'
            } else if (day > 2 && day <= 5) {
                color = 'yellow'
            } else {
                color = 'green'
            }
            let text;
            if (day === 1) {
                text = `${day} день`
            } else if (day > 1 && day <= 4) {
                text = `${day} дня`
            } else if (day > 4) {
                text = `${day} дней`
            } else if (day < 1 && day >= -4) {
                text = `${day} дня`
            } else if (day < -4) {
                text = `${day} дней`
            } else if (day === 0) {
                text = `${day} дней`
            }

            let show
            let textState
            let colorState
            let colorPercent
            if (day < 0) {
                show = 'red'
                textState = 'Просрочена'
                colorState = 'red'
                colorPercent = 'red'
            } else {
                show = 'grey'
                textState = 'В процессе'
                colorState = 'yellow'
                colorPercent = 'yellow'
            }


            dispatch(updateTimer({
                id,
                text,
                color,
                show,
                textState,
                colorState,
                colorPercent
            }))
        },
        chekTodo: (id) => {
            dispatch(clickTask({id}))
        },
        clearGoals:() => {
            dispatch(clearGoals())
        },
        deleteGoal:(id) => {
            dispatch(deleteGoal({id}))
        }
    }
}

let GoalsPageContainer = connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
export default GoalsPageContainer