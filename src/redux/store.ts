import {combineReducers, configureStore} from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas";
import books from "./slices/books";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    books
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);