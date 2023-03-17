import { createDetailtDoctorService, getAllDoctorService, getTopDoctorService } from '../../services/userService';
import actionTypes from './actionTypes';
import Swal from 'sweetalert2';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userLoginSuccerss = (userLogin) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userLogin
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const getTopDoctorAction = (limit) => {
    return async (dispatch) => {
        try {
            const res = await getTopDoctorService(limit)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_TOP_DOCTOR_SUCCESS,
                    topDoctor: res.doctor
                })
            } else {
                dispatch({
                    type: actionTypes.GET_TOP_DOCTOR_FAIL,
                    topDoctor: []
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_TOP_DOCTOR_FAIL,
            })
        }
    }
}

export const getAllDoctorAction = () => {
    return async (dispatch) => {
        try {
            const res = await getAllDoctorService()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_DOCTOR_SUCCESS,
                    allDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.GET_ALL_DOCTOR_FAIL,
                    allDoctor: []
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.GET_ALL_DOCTOR_FAIL,
            })
        }
    }
}

export const createDetailtInfoDoctorAction = (data) => {
    return async (dispatch) => {
        try {
            const res = await createDetailtDoctorService(data)
            if (res && res.errCode === 0) {
                Swal.fire('Thêm thành công', '', 'success')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: res.errMessage,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}