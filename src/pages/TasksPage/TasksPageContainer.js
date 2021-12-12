import {connect} from "react-redux"
import TasksPage from "./TasksPage"

let mapStateToProps = (state) => {
    return {
        valueWindow: state.todoPage.valueWindow,
        todoList: state.todoPage.todoList,
        check: state.todoPage.checkWindow,
        title: state.todoPage.valueTitle,
        start: state.todoPage.valueDateStart,
        end: state.todoPage.valueDateEnd,
        errors: state.todoPage.errors
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


            dispatch({
                type: 'DATE_FUNCTION',
                id,
                text,
                color,
                border,
                textState,
                colorState,
            })
        },
        click: (e, id) => {
            console.log(e)
            if (e.target.id === '1') {

                dispatch({
                    type: 'CHECK',
                    border: 'green',
                    textState: 'Выполнено',
                    colorState: 'green',
                    id,

                })
            } else if (e.target.id === '2') {
                dispatch({
                    type: 'DELETE_EL',
                    id,
                })
            }
        },
        window: () => {
            dispatch({type: 'WINDOW_OPEN'})
        },
        push: () => {
            dispatch({type: 'PUSH'})
        },
        changeTitle: (e) => {
            dispatch({type: 'CHANGE_TITLE', value: e.target.value})
        },
        changeDateStart: (e) => {
            dispatch({type: 'CHANGE_DATE_START', value: e.target.value})
        },
        changeDateEnd: (e) => {
            dispatch({type: 'CHANGE_DATE_END', value: e.target.value})
        },

        click1: () => {
            dispatch({type: 'DELETE_TODO'})
        },
        window1: () => {
            dispatch({type: 'WINDOW_OPEN'})
        }
    }
}


let TasksPageContainer = connect(mapStateToProps, mapDispatchToProps)(TasksPage)
export default TasksPageContainer
