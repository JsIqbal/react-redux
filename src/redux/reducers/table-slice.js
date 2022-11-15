import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
    },
    reducers: {
        createRecord: (state, action) => {
            state.tasks = [action.payload, ...state.tasks];
        },

        getTasks: (state, action) => {
            state.tasks = action.payload;
        }
    },
})

export const { createRecord, getTasks } = tableSlice.actions;

export default tableSlice.reducer;