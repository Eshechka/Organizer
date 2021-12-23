import axios from "axios";
import {configAxios} from "./index";

export const getGoalsId=(userId)=>{
    return configAxios.get(`/goals?userId=${userId}`)
}
export const addGoal=()=>{
    return configAxios.post('/goals')
}
export const updateGoalId=(goalId,taskId)=>{
    return configAxios.put(`/goals/update?goalId=${goalId}&taskId=${taskId}`)
}
export const deleteGoalIdAll=(userId,goalId=null)=>{
    return configAxios().delete(`/goals/delete?userId=${userId}&goalId=${goalId}`)
}