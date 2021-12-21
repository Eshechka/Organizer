import {connect} from "react-redux"
import TasksPage from "./TasksPage"
import {
    addTask, changedDateEnd, changedDateStart,
    changedTitle,
    checkTask, clearTasks,
    deleteTask,
    toggleWindow,window,
    updateTimer
} from "../../store/reducers/TasksActions";

let mapStateToProps = (state) => {
    return {
        valueWindow: state.tasks.valueWindow,
        todoList: state.tasks.todoList,
        check: state.tasks.checkWindow,
        title: state.tasks.valueTitle,
        start: state.tasks.valueDateStart,
        end: state.tasks.valueDateEnd,
        errors: state.tasks.errors
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
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
            let text
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
            }else if(day===0){
                text=`${day} дней`
            }

            let border
            let textState
            let colorState
            if (day < 0) {
                border = 'red'
                textState = 'Просрочена'
                colorState = 'red'
            } else {
                border = 'grey'
                textState = 'В процессе'
                colorState = 'yellow'
            }


            dispatch(updateTimer({
                id,
                text,
                color,
                border,
                textState,
                colorState,
            }))
        },
        click: (e, id) => {
            if (e.target.id === '1') {
                dispatch(checkTask({
                    border: 'green',
                    textState: 'Выполнено',
                    colorState: 'green',
                    id,
                }))
            } else if (e.target.id === '2') {
                dispatch(deleteTask({id}))
            }
        },
        window: () => {
            dispatch(window())
        },
        push: () => {
            dispatch(addTask())
        },
        changeTitle: (e) => {
            dispatch(changedTitle({value: e.target.value}))
        },
        changeDateStart: (e) => {
            dispatch(changedDateStart({value: e.target.value}))
        },
        changeDateEnd: (e) => {
            dispatch(changedDateEnd({value: e.target.value}))
        },

        click1: () => {
            dispatch(clearTasks())
        },
        window1: () => {
            dispatch(toggleWindow())
        }
    }
}


let TasksPageContainer = connect(mapStateToProps, mapDispatchToProps)(TasksPage)
export default TasksPageContainer
