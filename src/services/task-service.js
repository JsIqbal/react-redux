// import axios from 'axios';

// export const getTaskData = async () => {
//     let data = [];
//     await axios.get("https://todo-app37.herokuapp.com/loadTodo")
//         .then(res => {
//             data = res.data;
//         });
//         return data;
        
// }

// /**
//  * Store New Test Data to database
//  * 
//  * @param {object} taskItem 
//  */

// export const storeTaskData = async (taskItem) => {
//     let isAdded = false;
//     await axios.post("https://todo-app37.herokuapp.com/addTodo", taskItem)
//         .then(res => {
//             isAdded = res.data;
//         })
//         return isAdded;
        
// }
