import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

// applyMiddleware hya el bt2bel mene el middleware bt3e
// applyMiddleware apply thunk
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
