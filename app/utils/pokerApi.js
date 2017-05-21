import axios from 'axios';

const pokerApi = axios.create();
// pokerApi.defaults.baseURL = 'https://poker.pgs-soft.com/api';
pokerApi.defaults.baseURL = 'http://192.168.0.104:3004';

export default pokerApi;
