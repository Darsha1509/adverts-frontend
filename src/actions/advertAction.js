import { GET_ADVERTS, SET_ADVERT } from '../constants/actions';
import * as advertsApi from "../services/api/adverts";

export function getAdverts(targetAdverts) {
  console.log(targetAdverts);
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
