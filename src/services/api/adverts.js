import Axios from 'axios';
import {SESSION_API_URL} from "../../constants";

export function getAdverts(targetAdverts) {
  const queryObj = {};
  if(targetAdverts) queryObj.params = targetAdverts;
  return Axios.get(`${SESSION_API_URL}/adverts`, queryObj).then(response => {
    return response.data.adverts;
  });
}