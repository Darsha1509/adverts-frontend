import { createStore, applyMiddleware  } from 'redux';
import { rootReducer } from "../reducers";
import logger from "redux-logger"; // <-- подключаем наш enhancer
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));