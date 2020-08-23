import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducers } from "store/index";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

export function configureStore() {
    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        {},
        applyMiddleware(createLogger({ collapsed: true }), promiseMiddleware)
    );
}