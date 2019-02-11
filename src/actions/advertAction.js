import { GET_ADVERTS } from "../constants";
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
