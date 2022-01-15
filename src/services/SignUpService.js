import http from '../HttpCommon'

const saveUser = userData =>{
    return http.post("https://craftasticapi.herokuapp.com/users/signup",userData)
}


export default {
    saveUser
}