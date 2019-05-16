import { combineReducers } from 'redux';

//importujemy wszystkie nasze reducery
import categoriesReducer from './categoriesReducer';
import usersReducer from './usersReducers';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import movieReducer from './movieReducer';


export default combineReducers({
    categories: categoriesReducer,
    users: usersReducer,
    auth: authReducer,
    category: categoryReducer,
    movie: movieReducer,
})