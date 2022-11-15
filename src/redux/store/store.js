import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunkmiddleware from 'redux-thunk';

import counterReducer  from '../reducers/counter-slice';
import tableReducer from '../reducers/table-slice';

const middlewares = [thunkmiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

export default function Store (previousState) {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            task: tableReducer
        }
    }, previousState,  composedEnhancers);
    return store;
};