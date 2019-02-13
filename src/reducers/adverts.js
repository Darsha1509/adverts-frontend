import { GET_ADVERTS, SET_ADVERT, DELETE_ADVERT, GET_ADVERT, UPDATE_ADVERT } from "../constants/actions";

const initialState = {
  adverts: { data: [], loading: false, error: null },
  advert: { data: {}, loading: false, error: null }
};

export function advertsReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case GET_ADVERTS:
      if (!payload) {
        return { ...state, adverts: {loading: true} };
      }

      if (payload.error) {
        return { ...state, adverts: {loading: false, error: payload.error} };
      }
      if (payload.adverts) {
        return {
          ...state,
          adverts: { loading: false, error: null, data: payload.adverts }
        };
      }
      break;

    case SET_ADVERT:
      if (!payload) {
        return { ...state, advert: {loading: true} };
      }

      if (payload.error) {
        return { ...state, advert: {loading: false, error: payload.error} };
      }
      if (payload.advert) {
        return {
          ...state,
          advert: { loading: false, error: null, data: payload.advert }
        };
      }
      break;

    case DELETE_ADVERT:
      if (!payload) {
        return { ...state, adverts: {loading: true} };
      }

      if (payload.error) {
        return { ...state, adverts: {loading: false, error: payload.error} };
      }
      if (payload.adverts) {
        return {
          ...state,
          adverts: { loading: false, error: null, data: payload.adverts }
        };
      }
      break;

    case GET_ADVERT:
      if (!payload) {
        return { ...state, advert: {loading: true} };
      }

      if (payload.error) {
        return { ...state, advert: {loading: false, error: payload.error} };
      }
      if (payload.advert) {
        return {
          ...state,
          advert: { loading: false, error: null, data: payload.advert }
        };
      }
      break;

    case UPDATE_ADVERT:
      if (!payload) {
        return { ...state, advert: {loading: true} };
      }

      if (payload.error) {
        return { ...state, advert: {loading: false, error: payload.error} };
      }
      if (payload.advert) {
        return {
          ...state,
          advert: { loading: false, error: null, data: payload.advert }
        };
      }
      break;

    default:
      return state;
  }
}
