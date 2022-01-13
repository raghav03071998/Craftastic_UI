import http from '../HttpCommon'

const saveUser = userData =>{
    return http.post("/saveUser",userData)
}


export default {
    saveUser
}