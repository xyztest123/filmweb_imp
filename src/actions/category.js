import axios from "axios";
import { CATEGORY_LOADING, CATEGORY_LOAD_ERROR, CATEGORY_LOAD_SUCCESS } from '../constants/actionTypes';
import { API_URL_CATEGORY } from '../constants/consts';

export const loadCategory = (slug, page) => {
    return (dispatch) => {
        dispatch(changeCategoryLoading(true));
        return axios({
            method: 'get',
            url: API_URL_CATEGORY + '/' + slug + '?page=' + page,

        }).then((response) => {

            dispatch(categoryLoadSuccess(response.data.category, response.data.movies));
            dispatch(changeCategoryLoading(false));
        }).catch((errors) => {
            dispatch(changeCategoryLoading(false));
            dispatch(categoryLoadError());
        })
    }
}

export const changeCategoryLoading = (isLoading) => {
    return {
        type: CATEGORY_LOADING,
        isLoading: isLoading,
    }
}

export const categoryLoadSuccess = (categoryFromApi, moviesFromApi) => {
    return {
        type: CATEGORY_LOAD_SUCCESS,
        category: categoryFromApi,
        movies: moviesFromApi,

    }
}

export const categoryLoadError = () => {
    return {
        type: CATEGORY_LOAD_ERROR
    }
}