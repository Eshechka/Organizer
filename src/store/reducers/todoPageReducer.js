let defaultState = {
    valueWindow: false,
    valueTitle: '',
    valueDateStart: '',
    valueDateEnd: '',
    checkWindow: false,
    errors: {
        errorTitle: false
    },
    todoList: [],
}
let TodoPageReducer = (state = defaultState, action) => {
    let stateCopy = {
        ...state,
        todoList: [...state.todoList]
    }
    switch (action.type) {
        case 'WINDOW':
            stateCopy.valueWindow = !stateCopy.valueWindow
            return stateCopy
        case 'CHANGE_TITLE':
                stateCopy.valueTitle = action.value
                return stateCopy
        case  'CHANGE_DATE_START':
            stateCopy.valueDateStart = action.value
            return stateCopy
        case 'CHANGE_DATE_END':
            stateCopy.valueDateEnd = action.value
            return stateCopy
        case 'PUSH':
            stateCopy.errors.errorTitle = stateCopy.valueTitle === ''
            if (!stateCopy.errors.errorTitle) {
                let el = {
                    id: Math.floor(Math.random() * 1000000),
                    title: stateCopy.valueTitle,
                    DateStart: stateCopy.valueDateStart === '' ? null : stateCopy.valueDateStart,
                    DateEnd: stateCopy.valueDateEnd === '' ? null : stateCopy.valueDateEnd,
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
                    dayFunction: function () {
                        if (this.DateStart === null || this.DateEnd === null) {
                            this.day = null
                        }
                    }
                }
                el.dayFunction()
                stateCopy.todoList.unshift(el)
                stateCopy.valueWindow = !stateCopy.valueWindow
                stateCopy.valueDateEnd = ''
                stateCopy.valueDateStart = ''
                stateCopy.valueTitle = ''
                for (let key in stateCopy.errors) {
                    stateCopy.errors[key] = false
                }
                return stateCopy
            } else {
                stateCopy.valueWindow = !stateCopy.valueWindow
                stateCopy.valueDateEnd = ''
                stateCopy.valueDateStart = ''
                stateCopy.valueTitle = ''
                return stateCopy
            }

        case 'DATE_FUNCTION':
            if (stateCopy.todoList.length > 0) {
                stateCopy.todoList.forEach(el => {
                    if (el.id === action.id) {
                        el.day.text = action.text
                        el.day.color = action.color
                        el.state.text = action.textState
                        el.state.color = action.colorState
                        el.border = action.border
                    }
                })
            }
            return stateCopy
        case 'CHECK':
            if (stateCopy.todoList.length > 0) {
                stateCopy.todoList.forEach(el => {
                    if (el.id === action.id) {
                        el.state.text = action.textState
                        el.state.color = action.colorState
                        el.border = action.border
                        el.check = !el.check
                    }
                })
            }
            return stateCopy
        case 'DELETE_EL':
            if (stateCopy.todoList.length > 0) {
                stateCopy.todoList.forEach((el, i) => {
                    if (el.id === action.id) {
                        stateCopy.todoList.splice(i, 1)
                    }
                })
            }
            return stateCopy
        case 'DELETE_TODO':
           stateCopy.todoList=[]
            return stateCopy
        case 'WINDOW_OPEN':
            stateCopy.valueWindow = !stateCopy.valueWindow
            if (stateCopy.valueDateStart === '' || stateCopy.valueDateEnd === '') {
                stateCopy.checkWindow = false
            } else {
                stateCopy.checkWindow = true
            }
            return stateCopy
        default:
            return state
    }
}
export default TodoPageReducer
