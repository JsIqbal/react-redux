import React, { useEffect, useState, } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import axios from 'axios';

import { string, object } from "yup";
import TaskList from '../components/tasks/Task-list';
import TaskCreate from '../components/tasks/task-create';
import { getTaskData, storeTaskData } from '../services/task-service';

export const loginSchema = object().shape({
    email: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long."),
    password: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long.")
        .max(25,"This field minimum 25 character long."),
});

function TaskListPage() {
    const [tasks, setTasks] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState();

    useEffect(() => {
        initializeData();
    }, []);

    const initializeData = async () => {
        const data = await getTaskData();
        data.sort(); // ascending war sort.
        data.reverse(); // reversing
        setTasks(data);
        
        // console.log("Data from UI >>", data);
    }

    const createTask = async (e) => {
        e.preventDefault();

        if(email.length === 0) {
            alert("Please give a title");
            return false;
        }
        if(description.length === 0) {
            alert("Please give a title");
            return false;
        }
        if(priority.length === 0) {
            alert("Please give a title");
            return false;
        }

        // const taskItem = {
        //     id: 100,
        //     email: email,
        //     description: description,
        //     priority: priority
        // }

        const taskItem = {
            Title: email,
            Description: description,
            Priority: priority
        }
        // console.log(taskItem);

        // call api and save to database
        const isAdded = await storeTaskData(taskItem);
        console.log(isAdded);

        if (isAdded) {
            setEmail('');
            setDescription('');
            setPriority("");
            await initializeData();
        }
        else {
            alert("Something went wrong");
        }

        // const taskData = tasks;
        // // taskData.push(taskItem); // to show task on bottom
        // taskData.unshift(taskItem); // to show task on top
        // setTasks(taskData);
        
    }

  return (
    <Layout>
        {
            isCreateMode && (
                <TaskCreate 
                    createTask={createTask} 
                    email={email} 
                    setEmail={setEmail} 
                    description={description} 
                    setDescription={setDescription} 
                    priority={priority} 
                    setPriority={setPriority} 
                />
            )
        }

        <TaskList 
            tasks={tasks} 
            setIsCreateMode={() => (setIsCreateMode(isCreateMode ? false : true))}
        />
    </Layout>
  );
}

export default TaskListPage;