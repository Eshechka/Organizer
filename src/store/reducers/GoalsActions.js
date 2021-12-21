const {createSlice} = require("@reduxjs/toolkit");
const goalsSlice=createSlice({
    name:'goals',
    initialState:{
        valueTitle: '',
        valueDate: '',
        valueTodo: '',
        errors: {
            errorTitle: false,
            errorTodo: false,
        },
        valueWindow: false,
        checkWindow: false,
        goals: [],
    },
    reducers:{
        changedTitle(state,{payload}){
            state.valueTitle = payload.text
        },
        changedTodo(state,{payload}){
            state.valueTodo = payload.text
        },
        changedDate(state,{payload}){
            state.valueDate = payload.text
        },
        addGoal(state,{payload}){
            state.errors.errorTitle = state.valueTitle === '';
            state.errors.errorTodo = state.valueTodo === ''
            if (state.errors.errorTodo || state.errors.errorTitle) {
                state.valueWindow = !state.valueWindow
                state.valueDateEnd = ''
                state.valueTitle = ''
                state.valueTodo = ''
            } else {
                let tasks = []
                let newTasks = state.valueTodo.split(',')
                newTasks.forEach(el => {
                    let task = {
                        id: Math.floor(Math.random() * 100000),
                        title: el,
                        chek: false,
                        color: 'white',
                        showButton: true,
                        borderColor: 'white'
                    }
                    tasks.push(task)
                })
                let goal = {
                    id: Math.floor(Math.random() * 100000),
                    title: state.valueTitle,
                    DateStart: payload.date,
                    DateEnd: !state.valueDate ? null : state.valueDate,
                    day: {
                        text: '4 дня',
                        color: 'red',
                    },
                    state: {
                        text: 'в процессе',
                        color: 'yellow',
                    },
                    todo: [...tasks],
                    percent: 0,
                    colorPercent: 'yellow',
                    borderColor: 'grey',

                }
                if (!goal.DateEnd) {
                    goal.day = null
                }
                state.goals.unshift(goal)
                state.valueWindow = !state.valueWindow
                state.valueDate = ''
                state.valueTitle = ''
                state.valueTodo = ''
                for (let key in state.errors) {
                    state.errors[key] = false
                }

            }


        },
        updateTimer(state,{payload}){
            if (state.goals.length > 0) {
                state.goals.forEach(goal => {
                    if (goal.id === payload.id) {
                        goal.day.text = payload.text
                        goal.day.color = payload.color
                        goal.state.text = payload.textState
                        goal.state.color = payload.colorState
                        goal.colorPercent = payload.colorPercent
                    }
                })

            }
        },
        toggleWindow(state){
            state.valueWindow = !state.valueWindow
            if (!state.valueDate) {
                state.checkWindow = false
            } else {
                state.checkWindow = true
            }
        },
        clickTask(state,{payload}){
            state.goals.forEach(goal => {
                goal.todo.forEach(todo => {
                    if (todo.id === payload.id) {
                        todo.chek = true
                        todo.borderColor = 'green'
                        todo.showButton = false
                        let onePercent = 100 / goal.todo.length
                        if (todo.chek) {
                            goal.percent = +(goal.percent + onePercent).toFixed(2)
                        }
                        if (goal.percent >= 99.5) {
                            goal.percent = 100
                        }
                    }
                    if (goal.percent >= 100) {
                        goal.colorPercent = 'green'
                        goal.state.text = 'Завершена'
                        goal.state.color = 'green'
                    }
                })
            })
        },
        clearGoals(state){
            state.goals=[]
        },
        deleteGoal(state,{payload}){
            state.goals.forEach((goal,i)=>{
                if(goal.id===payload.id){
                    state.goals.splice(i,1)
                }
            })
        }
    }

})
export const {changedTitle,
    changedTodo,
    changedDate,
    addGoal,
    updateTimer,
    toggleWindow,
    clickTask,
    clearGoals,
    deleteGoal}= goalsSlice.actions
export default goalsSlice.reducer