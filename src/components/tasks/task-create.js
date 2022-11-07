import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/table-slice';
import { getTaskData, storeTaskData } from '../../services/task-service';

const TaskCreate = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks);

    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    
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

        const taskItem = {
            Title: email,
            Description: description,
            Priority: priority
        }

        const isAdded = await storeTaskData(taskItem);

        const data = await getTaskData();
        data.sort();
        data.reverse();
        dispatch(getTasks(data));
    }

    console.log('tasks >> ', tasks);

    return (
        <Form onSubmit={(e) => createTask(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    value={email} 
                    onChange={((e) => setEmail(e.target.value))} 
                    type="email" placeholder="name@example.com" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    value={description} 
                    onChange={((e) => setDescription(e.target.value))} 
                    as="textarea" rows={3} 
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <select 
                    className="form-control" 
                    value={priority} 
                    onChange={((e) => setPriority(e.target.value))}
                >
                    <option value="Select Task Priority">Select Task Priority</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                </select>
            </Form.Group>
            <Button className="btn btn-primary" type="submit" >submit</Button>
        </Form>
    );
}
 
export default TaskCreate;