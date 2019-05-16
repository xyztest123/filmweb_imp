import axios from 'axios';
import { API_URL_CATEGORIES } from '../constants/consts';
import { LOAD_CATEGORIES_SUCCESS } from '../constants/actionTypes';

export const loadCategories = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: API_URL_CATEGORIES
        }).then((response) => {
            dispatch(loadCategoriesSuccess(response.data.categories));
        })
    }
}

export const loadCategoriesSuccess = (data) => {
    return {
        type: LOAD_CATEGORIES_SUCCESS,
        categoriesList: data
    }
}