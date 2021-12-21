import { combineReducers, createStore } from "redux";
import GoalsPageReducer from "./reducers/goalsPageReducer";
import ProfilePageReducer from "./reducers/profilePageReducer";
import TitleReducer from "./reducers/titleReducer";
import TodoPageReducer from "./reducers/todoPageReducer";
import {configureStore} from "@reduxjs/toolkit";
import goalsSlice from './reducers/GoalsActions'
import tasksSlice from './reducers/TasksActions'
import usersSlice from './reducers/usersActions'
import globalTimeSlice from "./reducers/globalTimeActions";
import backgroundAnimationSlice from "./reducers/backgroundAnimationActions";

// let reducers = combineReducers({
//   titlePage: TitleReducer,
//   todoPage: TodoPageReducer,
//   goalsPage: GoalsPageReducer,
//   profilePage: ProfilePageReducer,
// });
// let store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store=configureStore({
  reducer:{
    goals: goalsSlice,
    tasks: tasksSlice,
    users: usersSlice,
    globalDateTime:globalTimeSlice,
    background:backgroundAnimationSlice
  },
  devTools:true
})
export default store;
