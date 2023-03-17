import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    topDoctor: [],
    allDoctor: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.GET_TOP_DOCTOR_SUCCESS:
            state.topDoctor = action.topDoctor
            return {
                ...state,
            }
        case actionTypes.GET_TOP_DOCTOR_FAIL:
            state.topDoctor = []
            return {
                ...state,
            }
        case actionTypes.GET_ALL_DOCTOR_SUCCESS:
            state.allDoctor = action.allDoctor
            return {
                ...state,
            }
        case actionTypes.GET_ALL_DOCTOR_FAIL:
            state.allDoctor = []
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default appReducer;