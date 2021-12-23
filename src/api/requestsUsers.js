import {configAxios} from "./index";

export const getUser= ()=>{
    return  configAxios.get('/profile')
}
export const updatePassword=()=>{
    return configAxios.put('/profile/password',{})
}
export const updateLogin=()=>{
    return configAxios.put('/profile/login')
}
export const deleteProfile=(userId)=>{
    return configAxios.delete(`/profile?userId=${userId}`)
}