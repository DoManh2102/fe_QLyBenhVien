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

export const eidtUserService = (data) => {
    return axios.post('/user/update-user', data)
}

export const getTopDoctorService = (limit) => {
    if (limit) {
        return axios.get(`/doctor/get-doctor/?limit=${limit}`)
    } else {
        return axios.get(`/doctor/get-doctor`)
    }
}

export const getAllDoctorService = () => {
    return axios.get(`/doctor/get-allDoctor`)
}

export const createDetailtDoctorService = (data) => {
    return axios.post(`/doctor/create-detailDoctor`, data)
}