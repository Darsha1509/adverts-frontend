import { GET_ADVERTS, SET_ADVERT, DELETE_ADVERT, GET_ADVERT, UPDATE_ADVERT } from '../constants/actions';
import * as advertsApi from "../services/api/adverts";

export function getAdverts(targetAdverts) {
  if (!targetAdverts) targetAdverts = "";
  return dispatch => {
    dispatch({ type: GET_ADVERTS });

    advertsApi
      .getAdverts(targetAdverts)
      .then(adverts => dispatch({ type: GET_ADVERTS, payload: { adverts } }))
      .catch(error => dispatch({ type: GET_ADVERTS, payload: { error } }));
  };
}

export function setAdvert(advert) {
  return dispatch => {
    dispatch({ type: SET_ADVERT });

    advertsApi.setAdvert(advert)
      .then((advert) => dispatch({ type: SET_ADVERT, payload: { advert } }))
      .catch(error => dispatch({ type: SET_ADVERT, payload: { error } }));
  }
}

export function deleteAdvert(pathId) {
  return dispatch => {
    dispatch({ type: DELETE_ADVERT });

    advertsApi.deleteAdvert(pathId)
      .then((adverts) => dispatch({ type: DELETE_ADVERT, payload: { adverts } }))
      .catch(error => dispatch({ type: DELETE_ADVERT, payload: { error } }));
  }
}

export function getAdvert(pathId) {
  return dispatch => {
    dispatch({ type: GET_ADVERT });

    advertsApi.getAdvert(pathId)
      .then((advert) => dispatch({ type: GET_ADVERT, payload: { advert } }))
      .catch(error => dispatch({ type: GET_ADVERT, payload: { error } }));
  }
}

export function updateAdvert(pathId, newAdvert) {
  return dispatch => {
    dispatch({ type: UPDATE_ADVERT });

    advertsApi.updateAdvert(pathId, newAdvert)
      .then((advert) => dispatch({ type: UPDATE_ADVERT, payload: { advert } }))
      .catch(error => dispatch({ type: UPDATE_ADVERT, payload: { error } }));
  }
}
