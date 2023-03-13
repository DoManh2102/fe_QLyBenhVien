import axios from '../axios'

export const handleLoginService = (email, password) => {
    return axios.post('/user/login', { email, password })
}

export const handleGetUserService = (firstName) => {
    if (firstName) {
        return axios.get(`/user/get-user/?name=${firstName}`)
    }
    else {
        return axios.get('/user/get-user/')

    }
}

export const createNewUserService = (data) => {
    return axios.post('/user/register', data)
}

export const deleteUserService = (id) => {
    return axios.delete(`/user/delete-user/${id}`)
}

