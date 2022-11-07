import React, { useEffect, useState, } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getTaskData, storeTaskData } from '../services/task-service';
import { getTasks } from '../redux/table-slice';

import Layout from '../components/layout/Layout';
import TaskList from '../components/tasks/Task-list';
import TaskCreate from '../components/tasks/task-create';
import CounterHit from '../components/counter/test-counter-hit';

function TaskListPage() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks);
    
    const [isCreateMode, setIsCreateMode] = useState(false);

    useEffect(() => {
        initializeData();
    }, []);

    const initializeData = async () => {
        const data = await getTaskData();
        data.sort();
        data.reverse();
        dispatch(getTasks(data))
    }

    return (
        <Layout>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='col-lg-4 me-auto ms-auto text-center'>
                <CounterHit />
            </div>
            <br/>
            <br/>
            {
                isCreateMode && (
                    <TaskCreate />
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