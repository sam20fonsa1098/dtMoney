import axios from 'axios';

const url = 'http://localhost:3000';

const customAxios = axios.create({
  baseURL: url,
});

export { customAxios, url };