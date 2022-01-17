import http from '../HttpCommon'

const categories = () =>{
    return http.get("https://61e02f870f3bdb0017934e58.mockapi.io/v1/categories")
}

export default {
    categories
}