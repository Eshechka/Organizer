import axios from "axios"
import {authorization, registration} from "./requestsAuthorization";
import {addTask, deleteTaskIdAll, getTasksId, updateTaskId} from "./requestsTasks";
import {addGoal, deleteGoalIdAll, getGoalsId, updateGoalId} from "./requestsGoals";
import {deleteProfile, getUser, updateLogin, updatePassword} from "./requestsUsers";
export const configAxios=axios.create({
  baseURL:'https://online-organizer.herokuapp.com',
    headers: {
        "Authorization": localStorage.getItem('token')?
            `Bearer ${JSON.parse(localStorage.getItem('token'))}`:null,
    }
})
configAxios.defaults.headers['Content-Type']='application/json'

 const api ={
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
