import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 100,
        count: 1
    },
    reducers: {
        increase: (state, action) => {
            let updatedValue = action.payload;
            updatedValue = parseInt(updatedValue);
            if (updatedValue) {
                state.value = state.value + updatedValue;
            }
            else {
                state.value ++
            }
        },
        decrease: state => {
            const v = state.value;
            if (v === 0) {

            }
            else {
            state.value--
            }
        },
        update: (state, action) => {
        //    console.log(state.value);
        //    console.log(action.payload);
            state.value = parseInt(action.payload);
        },
        incSpecific: (state, action) => {
            state.value = state.value + parseInt(action.payload);
        }
    },
})

// each case under reducers becomes an action
export const { increase, decrease, update, incSpecific } = counterSlice.actions;

export default counterSlice.reducer;