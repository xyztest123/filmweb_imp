import {
    USER_LOGIN_ERROR,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGIN_RESET_STATE
} from '../constants/actionTypes';

const initState = {
    isLogin: false,
    isLoading: false,
    statusCode: 200,
    message: {},
    user: {}
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                statusCode: action.statusCode,
                message: action.message,
                isLogin: false,
                user: {}
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                statusCode: action.statusCode,
                message: action.message,
                isLogin: true,
                user: action.user
            }
        case USER_LOGOUT:
            return {
                ...state,
                isLogin: false,
                user: {}
            }
        case USER_LOGIN_RESET_STATE: {
            return {
                ...state,
                message: {},
                statusCode: 200
            }
        }
        default:
            return state;
    }
}

export default authReducer;