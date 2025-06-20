import { configureStore } from "@reduxjs/toolkit";
import createSagaMidlleware from 'redux-saga';
import sidebarReducer from './redux/sidebarSlice';
import rootSaga from "./redux/rootSaga";

const sagaMiddleware = createSagaMidlleware();

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        // other reducers...
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;