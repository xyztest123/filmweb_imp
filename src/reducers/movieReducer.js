import { MOVIE_LOAD, MOVIE_LOAD_SUCCESS, MOVIE_LOAD_ERROR } from '../constants/actionTypes';

const initState = {
    isLoading: true,
    category: {},
    movie: {},
    isError: false,
    errorMessage: "",
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case MOVIE_LOAD:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case MOVIE_LOAD_ERROR:
            return {
                ...state,
                isError: true,
                category: {},
                movie: {},
                errorMessage: action.error

            }
        case MOVIE_LOAD_SUCCESS:
            return {
                ...state,
                isError: false,
                category: action.category,
                movie: action.movie
            }


        default:
            return state;
    }

}
export default movieReducer;