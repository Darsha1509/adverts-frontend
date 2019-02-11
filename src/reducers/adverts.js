import {GET_ADVERTS} from "../constants";

const initialState = {
  items: [],
  loading: false, // изначально статус загрузки - ложь
  error: null,
  // так как он станет true, когда запрос начнет выполнение
};

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADVERTS:
      const payload = action.payload;

      if (!payload) {
        return {...state, loading: true}
      }

      if (payload.error) {
        return { ...state, loading: false, error: payload.error }
      }

      if (payload.adverts) {
        return { ...state, loading: false, error: null, items: payload.adverts }
      }
      return {...state};

    default:
      return state
  }
}