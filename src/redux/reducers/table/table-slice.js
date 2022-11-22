import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        taskForm: {
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
        }
    },
})

export const { createRecord, getTasks, changeTaskInput } = tableSlice.actions;

export default tableSlice.reducer;