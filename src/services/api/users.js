import Axios from 'axios';
import {SESSION_API_URL} from "../../constants";

export function setUser(user) {
  return Axios.post(`${SESSION_API_URL}/users`, user).then((response) => {
    return response.data.user;
  });
}

export function getUsers() {
  return Axios.get(`${SESSION_API_URL}/users`).then((response) => {
    return response.data.users;
  });
}