import {configureStore} from "@reduxjs/toolkit";
import goalsSlice from './actions/goalsActions'
import tasksSlice from './actions/tasksActions'
import usersSlice from './actions/usersActions'
import globalTimeSlice from "./actions/globalTimeActions";
import backgroundAnimationSlice from "./actions/backgroundAnimationActions";

export const store = configureStore({
    reducer: {
        goals: goalsSlice,
        tasks: tasksSlice,
        users: usersSlice,
        globalDateTime: globalTimeSlice,
        background: backgroundAnimationSlice
    },
    devTools: true
})
export default store;
