import {configAxios} from "./index";

export const getTasksId=(userId)=>{
    return configAxios.get(`/tasks?userId=${userId}`)
}
export const addTask=()=>{
    return configAxios.post('/tasks')
}
export const updateTaskId=(taskId)=>{
    return configAxios.put(`/tasks/update?taskId=${taskId}`)
}
export const deleteTaskIdAll=(userId,taskId=null)=>{
    return configAxios.delete(`/tasks/delete?userId=${userId}&taskId=${taskId}`)
}