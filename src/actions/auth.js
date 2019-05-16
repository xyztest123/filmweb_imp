import axios from "axios";
import { API_URL_USER_LOGIN, API_URL_GET_AUTH_USER } from "../constants/consts";
import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGOUT,
    USER_LOGIN_RESET_STATE
} from "../constants/actionTypes";
import setAuthToken from "../utils/setAuthToken";


export const login = (authCredentials) => {
    return (dispatch) => {
        dispatch(changeLoginLoading(true));
        return axios({
            method: 'post',
            url: API_URL_USER_LOGIN,
            data: authCredentials
        }).then((response) => {
            dispatch(changeLoginLoading(false));
            dispatch(userLoginSuccess(200, response.data.message, response.data.user));
            localStorage.setItem('token', response.data.token);
            setAuthToken(response.data.token);
        }).catch((error) => {
            dispatch(changeLoginLoading(false));
            dispatch(userLoginError(401, error.response.data.message));
            localStorage.removeItem('token');
            setAuthToken(false);
        })
    }
}

export const changeLoginLoading = (isLoading) => {
    return {
        type: USER_LOGIN_LOADING,
        isLoading: isLoading
    }
}

export const userLoginSuccess = (statusCodeFromApi, messageFromApi, userFromApi) => {
    return {
        type: USER_LOGIN_SUCCESS,
        statusCode: statusCodeFromApi,
        message: messageFromApi,
        user: userFromApi
    }
}

export const userLoginError = (statusCodeFromApi, messageFromApi) => {
    return {
        type: USER_LOGIN_ERROR,
        statusCode: statusCodeFromApi,
        message: messageFromApi
    }
}


export const checkToken = () => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: API_URL_GET_AUTH_USER
        }).then((response) => {
            dispatch(userLoginSuccess(200, response.data.message, response.data.user));
        }).catch((error) => {
            localStorage.removeItem('token');
            setAuthToken(false);
        })
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(false);
    return {
        type: USER_LOGOUT
    }
}

export const clearLoginState = () => {
    return {
        type: USER_LOGIN_RESET_STATE
    }
}