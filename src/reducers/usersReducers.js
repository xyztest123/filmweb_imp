import { USER_REGISTER_ERROR, USER_REGISTER_SUCCESS, USER_REGISTER_LOADING } from "../constants/actionTypes";

const initialState = {
    isLoading: false,
    message: {},
    statusCode: 200,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                message: action.message,
                statusCode: action.statusCode
            }
        case USER_REGISTER_ERROR:
            return {
                ...state,
                message: action.message,
                statusCode: action.statusCode
            }
        default:
            return state;
    }
}

export default usersReducer;