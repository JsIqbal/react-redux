import axios from "axios";
import { getTasks, changeTaskInput, getTaskDetail } from "../reducers/table/table-slice";

export const getTaskDataAction = () => (dispatch) => {
    axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(res => {
            let data = res.data;
            data.sort();
            data.reverse();
            dispatch(getTasks(data));
        });
};

export const storeTaskDataAction = (taskForm) => (dispatch) => {
    if (taskForm.email.length === 0) {
        alert("Please give a title");
        return false;
    }
    if (taskForm.description.length === 0) {
        alert("Please give a title");
        return false;
    }
    if (taskForm.priority.length === 0) {
        alert("Please give a title");
        return false;
    }
    
    axios.post("https://todo-app37.herokuapp.com/addTodo", taskForm)
        .then(res => {
            dispatch(getTaskDataAction());
        });
};

export const handleChangeTextInputAction = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }

    dispatch(changeTaskInput(formData));
};

export const getTaskDetailDataAction = (id) => (dispatch) => {
    axios.get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`)
        .then(res => {
            let data = res.data;
            dispatch(getTaskDetail(data));
        });
};

export const updateTaskDataAction = (taskForm, id) => (dispatch) => {
    if (taskForm.email.length === 0) {
        alert("Please give a title");
        return false;
    }
    if (taskForm.description.length === 0) {
        alert("Please give a title");
        return false;
    }
    if (taskForm.priority.length === 0) {
        alert("Please give a title");
        return false;
    }
    
    axios.patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, taskForm)
        .then(res => {
            if (res.data.ok === 1) {
                alert('Task Updated');
                dispatch(getTaskDataAction());
            }
            else {
                alert("Something went wrong !");
            }
        });
};

export const deleteTaskDataAction = (id) => (dispatch) => {
    axios.delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
        .then(res => {
            if (res.data.ok === 1) {
                alert('Task Deleted');
                dispatch(getTaskDataAction());
            }
            else {
                alert("Something went wrong !");
            }
        });
};