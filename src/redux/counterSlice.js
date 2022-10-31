import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    count: 1
  },
  reducers: {
    increase: state => {
      state.value += 1
    },
    decrease: state => {
      const v = state.value;
      if (v === 0) {

      }
      else {
        state.value -= 1
      }
    }
  }
})

// each case under reducers becomes an action
export const { increase, decrease } = counterSlice.actions

export default counterSlice.reducer;