import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './counter-slice';
import tableReducer from './table-slice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        task: tableReducer
    }
})