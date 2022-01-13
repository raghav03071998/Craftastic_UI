import http from '../HttpCommon'

const login = credentials =>{
    return http.post("/login",credentials)
}

export default {
    login
}