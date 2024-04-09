import api from '../index.js';

export default {
  getMessage: () => api.get('/Message/GetMessage'),
  AddMessage: (msg) => api.post('/Message/AddMessage', {msg}),
}