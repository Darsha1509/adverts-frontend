import {combineReducers} from 'redux';
import {usersReducer} from "./users";
import {advertsReducer} from "./adverts";

export const rootReducer = combineReducers({
  adverts: advertsReducer,
  users: usersReducer
});