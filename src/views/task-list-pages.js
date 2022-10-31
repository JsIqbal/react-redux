import React, { useEffect, useState, } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout/Layout';

import { string, object } from "yup";
import TaskList from '../components/tasks/Task-list';
import TaskCreate from '../components/tasks/task-create';

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
        const data = [
            {
                id: 1,
                email: "example@mail.com",
                description: "Test Description",
                priority: "Low"
            },
            {
                id: 2,
                email: "example@mail.com",
                description: "Test Description",
                priority: "medium"
            },
            {
                id: 3,
                email: "example@mail.com",
                description: "Test Description",
                priority: "High"
            }
        ];

        setTasks(data);
    }, []);

    const createTask = (e) => {
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

        const taskItem = {
            id: 100,
            email: email,
            description: description,
            priority: priority
        }

        const taskData = tasks;
        // taskData.push(taskItem); // to show task on bottom
        taskData.unshift(taskItem); // to show task on top
        setTasks(taskData);
        setEmail('');
        setDescription('');
        setPriority("");
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