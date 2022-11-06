import React, { useEffect, useState, } from 'react';
import Layout from '../components/layout/Layout';

import TaskList from '../components/tasks/Task-list';
import TaskCreate from '../components/tasks/task-create';
import { getTaskData, storeTaskData } from '../services/task-service';
import Counter from '../components/counter/counter.component';
import CounterHit from '../components/counter/test-counter-hit';

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
        <br/>
        <br/>
        <br/>
        {/* <div className='col-lg-2 me-auto ms-auto text-center'>
            <Counter />
        </div> */}
        <br/>
        <div className='col-lg-4 me-auto ms-auto text-center'>
            <CounterHit />
        </div>
        <br/>
        <br/>
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