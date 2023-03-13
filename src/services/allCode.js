import axios from '../axios'

export const getAllCodeService = (type) => {
    if (type) {
        return axios.get(`/allCode/get-allCode/?type=${type}`)
    }
    else {
        return axios.get(`/allCode/get-allCode`)
    }
}

