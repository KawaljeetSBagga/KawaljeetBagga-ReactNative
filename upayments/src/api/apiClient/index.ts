import axios from 'axios';
import { BASE_URL } from '../../utils/constants/Strings';

const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthd2FsamVldHNiYWdnYUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vS2F3YWxqZWV0U0JhZ2dhIiwiaWF0IjoxNjU5MzMxNDczLCJleHAiOjE2NTk3NjM0NzN9.4cKDA9jM_kvmI3CfJgruS5qL9OFGc58L0JrTS2mrIiw';

export const apiGet = (path: string) => {
  return axios.get(path, {
  timeout: 90000,
  baseURL: `${BASE_URL}`,
  headers: { Authorization: AUTH_TOKEN }
});
}

export const apiPost = (path: string, params: {}) => axios.post(
  `${BASE_URL}${path}`,
  params,
  {
    timeout: 90000,
    headers: { Authorization: AUTH_TOKEN },
  });