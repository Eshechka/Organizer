import { combineReducers, createStore } from "redux";
import GoalsPageReducer from "./reducers/goalsPageReducer";
import ProfilePageReducer from "./reducers/profilePageReducer";
import TitleReducer from "./reducers/titleReducer";
import TodoPageReducer from "./reducers/todoPageReducer";
import {configureStore} from "@reduxjs/toolkit";

let reducers = combineReducers({
  titlePage: TitleReducer,
  todoPage: TodoPageReducer,
  goalsPage: GoalsPageReducer,
  profilePage: ProfilePageReducer,
});
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
// export const store=configureStore({
//   reducer:{
//
//   },
//   devTools:true
// })
