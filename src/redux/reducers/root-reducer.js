// Combine all of the reducers
import counterSlice from "./counter-slice";
import tableSlice from "./table-slice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterSlice: counterSlice,
    tableSlice: tableSlice
});

export default rootReducer;