import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// Custom Middleware
const customMiddleware = store => next => action => {
  if (action.type === 'FETCH_TODOS') {
    return 5
  } else {
    return next(action)
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup middleware
export const middlewares = [thunk, logger, customMiddleware];

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
