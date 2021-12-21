let defaultState = {
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
}
let GoalsPageReducer = (state = defaultState, action) => {
    let stateCopy = {
        ...state,
        goals: [...state.goals]
    }
    switch (action.type) {
        case 'VALUE_TITLE':
            stateCopy.valueTitle = action.text
            return stateCopy
        case 'VALUE_DATE':
            stateCopy.valueDate = action.text
            return stateCopy
        case 'VALUE_TODO':
            stateCopy.valueTodo = action.text
            return stateCopy
        case 'ADD_GOALS':
            stateCopy.errors.errorTitle = stateCopy.valueTitle === '';
            stateCopy.errors.errorTodo = stateCopy.valueTodo === ''
            if (stateCopy.errors.errorTodo || stateCopy.errors.errorTitle) {
                stateCopy.valueWindow = !stateCopy.valueWindow
                stateCopy.valueDateEnd = ''
                stateCopy.valueTitle = ''
                stateCopy.valueTodo = ''
                return stateCopy
            } else {
                let todoNew = []
                let arrTodo = stateCopy.valueTodo.split(',')
                arrTodo.forEach(el => {
                    let obj = {
                        id: Math.floor(Math.random() * 100000),
                        title: el,
                        chek: false,
                        color: 'white',
                        showButton: true,
                        borderColor: 'white'
                    }
                    todoNew.push(obj)
                })
                let goal = {
                    id: Math.floor(Math.random() * 100000),
                    title: stateCopy.valueTitle,
                    DateStart: action.date,
                    DateEnd: stateCopy.valueDate === '' ? null : stateCopy.valueDate,
                    day: {
                        text: '4 дня',
                        color: 'red',
                    },
                    state: {
                        text: 'в процессе',
                        color: 'yellow',
                    },
                    todo: [...todoNew],
                    percent: 0,
                    colorPercent: 'yellow',
                    borderColor: 'grey',
                    dayFunction: function () {
                        if (this.DateEnd === null) {
                            this.day = null
                        }
                    }
                }
                goal.dayFunction()

                stateCopy.goals.unshift(goal)
                stateCopy.valueWindow = !stateCopy.valueWindow
                stateCopy.valueDateEnd = ''
                stateCopy.valueTitle = ''
                stateCopy.valueTodo = ''
                for (let key in stateCopy.errors) {
                    stateCopy.errors[key] = false
                }

                return stateCopy
            }


        case 'DATE_F':

            if (stateCopy.goals.length > 0) {
                stateCopy.goals.forEach(el => {
                    if (el.id === action.id) {
                        el.day.text = action.text
                        el.day.color = action.color
                        el.state.text = action.textState
                        el.state.color = action.colorState
                        el.colorPercent = action.colorPercent
                    }
                })

            }
            return stateCopy
        case 'OPEN_WINDOW':
            stateCopy.valueWindow = !stateCopy.valueWindow
            if (stateCopy.valueDate === '') {
                stateCopy.checkWindow = false
            } else {
                stateCopy.checkWindow = true
            }
            return stateCopy
        case 'CHECKED_TODO':
            stateCopy.goals.forEach(goal => {
                goal.todo.forEach(todo => {
                    if (todo.id === action.id) {
                        todo.chek = true
                        todo.borderColor = 'green'
                        todo.showButton = false
                        let onePercentTodo = 100 / goal.todo.length
                        if (todo.chek) {
                            goal.percent = +(goal.percent + onePercentTodo).toFixed(2)
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
            return stateCopy
        case 'CLEAR_GOALS':
        stateCopy.goals = []
            return stateCopy
        case 'DELETE_GOAL':
            stateCopy.goals.forEach((item, i) => {
                if (item.id === action.id){
                 stateCopy.goals.splice(i, 1)
                }
            })
            return stateCopy

        default:
            return state
    }
}


export default GoalsPageReducer