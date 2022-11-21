import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunkmiddleware from 'redux-thunk';

import rootReducer from '../reducers/root-reducer';

const middlewares = [thunkmiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

export default function Store (previousState) {
    const store = configureStore({
        reducer: rootReducer
    }, previousState,  composedEnhancers);
    return store;
};