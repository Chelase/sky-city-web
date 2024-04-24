import api from '../index.js';

export default {
    Register: (data) => api.post('/User/Register', data),
    Login: (data) => api.post('/User/Login', data),
}