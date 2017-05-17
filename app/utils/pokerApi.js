import axios from 'axios';

const pokerApi = axios.create();
pokerApi.defaults.baseURL = 'https://poker.pgs-soft.com/api';

export default pokerApi;
