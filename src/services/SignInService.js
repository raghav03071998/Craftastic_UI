import http from '../HttpCommon'
const login = userData =>{
    return http.post("https://craftasticapi.herokuapp.com/users/signin",userData)
}

export default {
    login
}