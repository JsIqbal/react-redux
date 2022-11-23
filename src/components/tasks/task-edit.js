import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getTaskDataAction, getTaskDetailDataAction, handleChangeTextInputAction, storeTaskDataAction, updateTaskDataAction } from '../../redux/actions/task-action';
import { createRecord } from '../../redux/reducers/table/table-slice';

const TaskEdit = () => {
    const dispatch = useDispatch();
    const taskForm = useSelector(state => state.tableSlice.taskForm);
    const navigate = useNavigate();
    
    const params = useParams();
    
    const { id } = params;

    const handleChangeText = (name, value) => {
        dispatch(handleChangeTextInputAction(name, value));
    }

    useEffect(() => {
        dispatch(getTaskDetailDataAction(id))
    }, [])

    
    const updateTask = async (e) => {
        e.preventDefault();
        dispatch(createRecord(taskForm));


        dispatch(updateTaskDataAction(taskForm, id));

        dispatch(getTaskDataAction());

        navigate('/');
    }

    return (
        <Form onSubmit={(e) => updateTask(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    value={taskForm.email} 
                    onChange={((e) => handleChangeText("email", e.target.value))} 
                    type="email" placeholder="name@example.com" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    value={taskForm.description} 
                    onChange={((e) => handleChangeText("description", e.target.value))} 
                    as="textarea" rows={3} 
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <select 
                    className="form-control" 
                    value={taskForm.priority} 
                    onChange={((e) => handleChangeText("priority", e.target.value))}
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
 
export default TaskEdit;