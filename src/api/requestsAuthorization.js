import {configAxios} from "./index";

export const registration=()=>{
    return configAxios.post('/auth/registration')
}
export const authorization=()=>{
    return configAxios.post('/auth/login')
}