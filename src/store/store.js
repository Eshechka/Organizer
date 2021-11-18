import {combineReducers, createStore} from "redux";
import GoalsPageReducer from "./reducers/goalsPageReducer";
import titleReducer from "./reducers/titleReducer";
import TodoPageReducer from "./reducers/todoPageReducer";

let reducers = combineReducers({
    titlePage: titleReducer,
    todoPage: TodoPageReducer,
    goalsPage: GoalsPageReducer,
})
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store