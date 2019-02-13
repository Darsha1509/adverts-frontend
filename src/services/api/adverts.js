import Axios from "axios";
import { SESSION_API_URL } from "../../constants";

export function getAdverts(targetAdverts) {
  const queryObj = {};
  if (targetAdverts) queryObj.params = targetAdverts;
  return Axios.get(`${SESSION_API_URL}/adverts`, queryObj).then(response => {
    return response.data.adverts;
  });
}

export function setAdvert(advert) {
  advert.price = +advert.price;
  return Axios.post(`${SESSION_API_URL}/adverts`, advert).then(response => {
    return response.data.advert;
  });
}

export function deleteAdvert(pathId) {
  return Axios.delete(`${SESSION_API_URL}/adverts/${pathId}`).then(response => {
    return response.data.adverts;
  });
}

export function getAdvert(pathId) {
  return Axios.get(`${SESSION_API_URL}/adverts/${pathId}`).then(response => {
    return response.data.advert;
  });
}

export function updateAdvert(pathId, newAdvert) {
  return Axios.patch(`${SESSION_API_URL}/adverts/${pathId}`, newAdvert).then(
    response => {
      return response.data.updatedAdvert;
    }
  );
}
