import axios from 'axios';
import {BASE_URL} from './endpoints';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axios.defaults.timeout = 5000;
axios.defaults.baseURL = BASE_URL;

export const post = async () => {};

export const get = async (path: string, params?: any) => {
  try {
    const res = await instance.get(path, params);
    return res.data;
  } catch (error) {
    throw error;
  }
};
