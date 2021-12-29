import axios from "axios"
import {authorization, registration} from "./requestsAuthorization";
import {addTask, deleteTaskIdAll, getTasksId, updateTaskId} from "./requestsTasks";
import {addGoal, deleteGoalIdAll, getGoalsId, updateGoalId} from "./requestsGoals";
import {deleteProfile, getUser, updateLogin, updatePassword} from "./requestsUsers";

export const configAxios = axios.create({
    baseURL: 'https://online-organizer.herokuapp.com',
    headers: {
        "Content-type": 'application/json',
    }
})
configAxios.interceptors.request.use(req => {
    if (localStorage.getItem('token')) {
        req.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        return req
    } else {
        req.headers['Authorization'] = ''
        return req
    }

})
const api = {
    registration,
    authorization,
    getTasksId,
    addTask,
    updateTaskId,
    deleteTaskIdAll,
    getGoalsId,
    addGoal,
    updateGoalId,
    deleteGoalIdAll,
    getUser,
    updatePassword,
    updateLogin,
    deleteProfile
}
export default api
