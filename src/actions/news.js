import { API_URL_NEWS_LIST, API_URL_NEWS_SINGLE } from "../constants/consts";
import axios from 'axios';

export const loadNewsFromApi = (page) => {
    let url = API_URL_NEWS_LIST + "?page=" + page + '&perPage=6';

    return axios({
        method: "get",
        url: url
    })
}

export const loadSingleNewsFromApi = (slug) => {
    let url = API_URL_NEWS_SINGLE + "/" + slug;

    return axios({
        method: "get",
        url: url
    })
}
