import { CATEGORY_LOADING, CATEGORY_LOAD_ERROR, CATEGORY_LOAD_SUCCESS } from '../constants/actionTypes';

const initState = {
    isLoading: true,
    category: {},
    movies: {},
    isError: false,
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case CATEGORY_LOAD_ERROR:
            return {
                ...state,
                isError: true,
                category: {},
                movies: {},

            }
        case CATEGORY_LOAD_SUCCESS:
            return {
                ...state,
                isError: false,
                category: action.category,
                movies: action.movies
            }


        default:
            return state;
    }

}
export default categoryReducer;