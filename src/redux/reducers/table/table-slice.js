import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        taskForm: {
            _id: null,
            email: "",
            description: "",
            priority: "" 
        }
    },
    reducers: {
        createRecord: (state, action) => {
            state.taskForm = {
                email: "",
                description: "",
                priority: "" 
            }
        },

        getTasks: (state, action) => {
            state.tasks = action.payload;
        },

        changeTaskInput: (state, action) => {
            const taskForm = {...state.taskForm}
            taskForm[action.payload.name] = action.payload.value;

            return {
                ...state,
                taskForm
            };
        },

        getTaskDetail: (state, action) => {
            return {
                ...state,
                taskForm: action.payload
            };
        },
    },
})

export const { createRecord, getTasks, changeTaskInput, getTaskDetail } = tableSlice.actions;

export default tableSlice.reducer;