const {createSlice} = require("@reduxjs/toolkit");
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        valueWindow: false,
        valueTitle: '',
        valueDateStart: '',
        valueDateEnd: '',
        checkWindow: false,
        errors: {
            errorTitle: false
        },
        todoList: [],
    },
    reducers: {
        changedTitle(state, {payload}) {
            state.valueTitle = payload.value
        },
        changedDateStart(state, {payload}) {
            state.valueDateStart = payload.value
        },
        changedDateEnd(state, {payload}) {
            state.valueDateEnd = payload.value
        },
        addTask(state) {
            state.errors.errorTitle = state.valueTitle === ''
            if (!state.errors.errorTitle) {
                let task = {
                    id: Math.floor(Math.random() * 1000000),
                    title: state.valueTitle,
                    DateStart: !state.valueDateStart ? null : state.valueDateStart,
                    DateEnd: !state.valueDateEnd ? null : state.valueDateEnd,
                    day: {
                        text: '4 дня',
                        color: 'red',
                    },
                    state: {
                        text: 'в процессе',
                        color: 'yellow',
                    },
                    border: 'grey',
                    check: false,

                }
                if (!task.DateStart || !task.DateEnd) {
                    task.day = null
                }


                state.todoList.unshift(task)
                state.valueWindow = !state.valueWindow
                state.valueDateEnd = ''
                state.valueDateStart = ''
                state.valueTitle = ''
                for (let key in state.errors) {
                    state.errors[key] = false
                }
            } else {
                state.valueWindow = !state.valueWindow
                state.valueDateEnd = ''
                state.valueDateStart = ''
                state.valueTitle = ''

            }

        },
        updateTimer(state, {payload}) {
            if (state.todoList.length > 0) {
                state.todoList.forEach(task => {
                    if (task.id === payload.id) {
                        task.day.text = payload.text
                        task.day.color = payload.color
                        task.state.text = payload.textState
                        task.state.color = payload.colorState
                        task.border = payload.border
                    }
                })
            }
        },
        toggleWindow(state) {
            state.valueWindow = !state.valueWindow
            if (state.valueDateStart === '' || state.valueDateEnd === '') {
                state.checkWindow = false
            } else {
                state.checkWindow = true
            }
        },
        window(state){
            state.valueWindow = !state.valueWindow
        },
        checkTask(state, {payload}) {
            if (state.todoList.length > 0) {
                state.todoList.forEach(el => {
                    if (el.id === payload.id) {
                        el.state.text = payload.textState
                        el.state.color = payload.colorState
                        el.border = payload.border
                        el.check = !el.check
                    }
                })
            }
        },
        clearTasks(state) {
            state.todoList = []
        },
        deleteTask(state, {payload}) {
            if (state.todoList.length > 0) {
                state.todoList.forEach((task, i) => {
                    if (task.id === payload.id) {
                        state.todoList.splice(i, 1)
                    }
                })
            }
        }
    }

})
export const {
    changedTitle,
    changedDateStart,
    changedDateEnd,
    addTask,
    updateTimer,
    toggleWindow,
    window,
    checkTask,
    clearTasks,
    deleteTask
} = tasksSlice.actions
export default tasksSlice.reducer