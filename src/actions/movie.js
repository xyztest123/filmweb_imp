import { API_URL_MOVIE } from "../constants/consts";
import axios from "axios";
import { MOVIE_LOAD_ERROR, MOVIE_LOAD_SUCCESS, MOVIE_LOAD } from "../constants/actionTypes";


export const loadsMovieDataFromApi = (movieTitle) => {
    let url = API_URL_MOVIE + '/' + movieTitle;

    return (dispatch) => {
        dispatch(movieLoading(true));
        axios({
            method: 'get',
            url: url
        }).then((response) => {
            dispatch(movieLoadSuccess(response.data.movie, response.data.categories));
            dispatch(movieLoading(false));

        }).catch((error) => {
            dispatch(movieLoadError(error.response.message));
            dispatch(movieLoading(false));
        })

    }
}

export const movieLoading = (isLoading) => {
    return {
        type: MOVIE_LOAD,
        isLoading: isLoading
    }

}

export const movieLoadSuccess = (movieData, categoryData) => {
    return {
        type: MOVIE_LOAD_SUCCESS,
        movie: movieData,
        category: categoryData
    }
}

export const movieLoadError = (error) => {
    return {
        type: MOVIE_LOAD_ERROR,
        error: error
    }
}