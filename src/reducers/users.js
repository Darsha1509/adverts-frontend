import { GET_USERS, SET_USER } from "../constants";

const initialState = {
  items: [],
  loading: false, // изначально статус загрузки - ложь
  error: null
  // так как он станет true, когда запрос начнет выполнение
};

export function usersReducer(state = initialState, action) {
  const payload = action.payload;
  if (!payload) {
    return { ...state, loading: true };
  }

  if (payload.error) {
    return { ...state, loading: false, error: payload.error };
  }

  switch (action.type) {
    case GET_USERS:
      if (payload.users) {
        return { ...state, loading: false, error: null, items: payload.users };
      }
      break;

    case SET_USER:
      if (payload.user) {
        return {
          ...state,
          loading: false,
          error: null,
          items: payload.user
        };
      }
      break;

    default:
      return state;
  }
}
