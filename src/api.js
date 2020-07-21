import axios from 'axios';

const api = axios.create({
  baseURL: "http://demo7006223.mockable.io/"
});

export default api;