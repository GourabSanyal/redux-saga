// import { createStore } from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import productSaga from './saga/productSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productSaga);
export default store;