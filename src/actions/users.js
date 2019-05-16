import axios from 'axios';
import { API_URL_USER_REGISTER } from '../constants/consts';
import { USER_REGISTER_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_LOADING } from '../constants/actionTypes';

export const registerUser = (userFormData) => {
    return (dispatch) => {
        dispatch(changeUserLoading(true));
        return axios({
            method: 'post',
            url: API_URL_USER_REGISTER,
            data: userFormData
        }).then((response) => {
            dispatch(changeUserLoading(false));
            dispatch(registerUserSuccess(response.data.message, 200))
        }).catch((error) => {
            dispatch(changeUserLoading(false));
            dispatch(registerUserError(error.message, 422))
        })
    }
}

export const changeUserLoading = (isLoading) => {
    return {
        type: USER_REGISTER_LOADING,
        isLoading: isLoading
    }
}

export const registerUserSuccess = (messageFromApi, statusCodeFromApi) => {
    return {
        type: USER_REGISTER_SUCCESS,
        message: messageFromApi,
        statusCode: statusCodeFromApi
    }
}

export const registerUserError = (messageFromApi, statusCodeFromApi) => {
    return {
        type: USER_REGISTER_ERROR,
        message: messageFromApi,
        statusCode: statusCodeFromApi
    }
}