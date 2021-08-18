import axios from 'axios';
import { BASE_URL } from '../../env';
import params from './params';

const api = axios.create({
  baseURL: BASE_URL,
  params: { ...params() },
});

export default api;
