import {combineReducers, createStore} from "redux";
import titleReducer from "./redusers/titleReducer";
import TodoPageReducer from "./redusers/TodoPageRedecer";
let reducers=combineReducers({
    titlePage: titleReducer,
    todoPage: TodoPageReducer,
})
let store=createStore(reducers)
export default store