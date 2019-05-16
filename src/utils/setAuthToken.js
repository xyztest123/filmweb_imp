import axios from 'axios';

export default function setAuthToken(token) {
    //  let token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        //    localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    }
}