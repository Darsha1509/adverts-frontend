import {SET_USER, GET_USERS, GET_USER, UPDATE_USER, DELETE_USER} from "../constants/actions";
import * as usersApi from "../services/api/users";

export function setUser(user) {
  return dispatch => {
    dispatch({ type: SET_USER });

    usersApi.setUser(user)
      .then((user) => {
        dispatch({ type: SET_USER, payload: { user } })
      })
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

export function getUser(path) {
  return dispatch => {
    dispatch({ type: GET_USER });

    usersApi.getUser(path)
      .then((user) => dispatch({ type: GET_USER, payload: { user } }))
      .catch(error => dispatch({ type: GET_USER, payload: { error } }));
  }
}

export function updateUser(pathId, newUser) {
  return dispatch => {
    dispatch({ type: UPDATE_USER });

    usersApi.updateUser(pathId, newUser)
      .then((user) => dispatch({ type: UPDATE_USER, payload: { user } }))
      .catch(error => dispatch({ type: UPDATE_USER, payload: { error } }));
  }
}

export function deleteUser(pathId) {
  return dispatch => {
    dispatch({ type: DELETE_USER });

    usersApi.deleteUser(pathId)
      .then((users) => dispatch({ type: DELETE_USER, payload: { users } }))
      .catch(error => dispatch({ type: DELETE_USER, payload: { error } }));
  }
}
