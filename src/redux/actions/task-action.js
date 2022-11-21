import axios from "axios";
import { getTasks } from "../reducers/table-slice";

export const getTaskDataAction = () => (dispatch) => {
    axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(res => {
            let data = res.data;
            data.sort();
            data.reverse();
            dispatch(getTasks(data));
        });
};

export const storeTaskDataAction = (taskItem) => (dispatch) => {
    axios.post("https://todo-app37.herokuapp.com/addTodo", taskItem)
        .then(res => {
            dispatch(getTaskDataAction());
        });
};