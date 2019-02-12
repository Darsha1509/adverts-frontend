import { GET_USERS, SET_USER } from "../constants/actions";

const initialState = {
  user: { data: {}, loading: false, error: null },
  users: { data: [], loading: false, error: null }
};

export function usersReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case GET_USERS:
      if (!payload) {
        return { ...state, users: { ...state.users, loading: true} };
      }

      if (payload.error) {
        return { ...state, users: {...state.users, loading: false, error: payload.error} };
      }
      if (payload.users) {
        return {
          ...state,
          users: { loading: false, error: null, data: payload.users }
        };
      }
      break;

    case SET_USER:
      if (!payload) {
        return { ...state, user: {...state.user, loading: true} };
      }

      if (payload.error) {
        return { ...state, user: { ...state.user, loading: false, error: payload.error} };
      }
      if (payload.user) {
        return {
          ...state,
          user: {
            loading: false,
            error: null,
            data: payload.user
          }
        };
      }
      break;

    default:
      return state;
  }
}
