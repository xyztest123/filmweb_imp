import { LOAD_CATEGORIES_SUCCESS } from "../constants/actionTypes";

const initialState = {
    categoriesList: [],
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesList: action.categoriesList
            }
        default:
            return state;
    }
}

export default categoriesReducer;

