import {SET_USER, GET_USERS} from "../constants";
import * as usersApi from "../services/api/users";

export function setUser(user) {
  return dispatch => {
    dispatch({ type: SET_USER });

    usersApi.setUser(user)
      .then((user) => dispatch({ type: SET_USER, payload: { user } }))
      .catch(error => dispatch({ type: SET_USER, payload: { error } }));
  }
}

export function getUsers() {
  return dispatch => {
    dispatch({ type: GET_USERS });

    usersApi.getUsers()
      .then((users) => dispatch({ type: GET_USERS, payload: { users } }))
      .catch(error => dispatch({ type: GET_USERS, payload: { error } }));
  }
}
