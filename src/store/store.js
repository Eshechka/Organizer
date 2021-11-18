import {combineReducers, createStore} from "redux";
import GoalsPageReducer from "./redusers/GoalsPageReducer";
import titleReducer from "./redusers/titleReducer";
import TodoPageReducer from "./redusers/TodoPageRedecer";

let reducers = combineReducers({
    titlePage: titleReducer,
    todoPage: TodoPageReducer,
    goalsPage: GoalsPageReducer,
})
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store