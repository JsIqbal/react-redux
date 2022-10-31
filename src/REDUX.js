
// Get CreateStore() from 'redux
// Initialize a store object 
// Do jobs on changes any action

// Set a store
// listen that anything changes in the store 
// update data in the store/ global store

import { createStore } from 'redux'

// Initialize a store object
const InitializeState = {
    counter: 0,
    value: 1,
    taskForm: {
        Title: "",
        Priority: ""
    },
    taskList: []
}

// Do jobs on changes any action
function CounterReducer (state = InitializeState, action) {
    switch (action.type) {
        case 'GET_COUNTER':
            
            return {
                ...state,
            }
            break;
        case 'UPDATE_COUNTER':
        
            return {
                ...state,
                counter: 6
            }
            break;
        case 'INCREAMENT_COUNTER':
    
        return {
            ...state,
            counter: state.counter + 1
        }
        break;
        case 'DECREAMENT_COUNTER':
    
        return {
            ...state,
            counter: state.counter - 1
        }
        break;
        case 'UPDATE_VALUE':
    
        return {
            ...state,
            value: 100
        }
        break;
        case 'PASS_DYNAMIC_DATA':
        // console.log('enter in dynamic data');
        // console.log("action >>", action);
        // console.log("value >>", action.payload);
        return {
            ...state,
            counter: action.payload
        }
        break;
        case 'ADD_TASK':
        console.log("taskform >>", action.payload);
        return {
            ...state,
            taskForm: action.payload
        }
        break;
        case 'ADD_NEW_TASK_TO_TASKLIST':
        console.log("TaskList >>", action.payload);
        return {
            ...state,
            taskList: [...state.taskList, action.payload]
        }
        break;
    
        default:
            break;
    }
    return state;
}

// Set a store
let store = createStore(CounterReducer);

// listen that anything changes in the store 
store.subscribe(() => console.log(store.getState()));

// Get Data
store.dispatch({ type: "GET_COUNTER" });

// update data in the store/ global store
store.dispatch({ type: "UPDATE_COUNTER" });
store.dispatch({ type: "UPDATE_VALUE" });

store.dispatch({ type: "INCREAMENT_COUNTER" });
// store.dispatch({ type: "INCREAMENT_COUNTER" });
// store.dispatch({ type: "INCREAMENT_COUNTER" });


store.dispatch({ type: "DECREAMENT_COUNTER" });
// store.dispatch({ type: "DECREAMENT_COUNTER" });

// Pass Dynamic data to reducer
store.dispatch({ type: "PASS_DYNAMIC_DATA", payload: 10 });

const taskData = {
    Title: "Dynamic Redux Title for tast data",
    Priority: "Very High!"
}
store.dispatch({ type: "ADD_TASK", payload: taskData });

const forTaskListTaskData = {
    Title: "Dynamic Redux Title for task list",
    Priority: "Very Low!"
}
store.dispatch({ type: "ADD_NEW_TASK_TO_TASKLIST", payload: forTaskListTaskData });

store.dispatch({ type: "ADD_NEW_TASK_TO_TASKLIST", payload: {
    Title: "Dynamic Redux Title for task list xxx",
    Priority: "Very Medium!"
} });