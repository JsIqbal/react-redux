import { Form, Button } from 'react-bootstrap';

const TaskCreate = ({ createTask, email, setEmail, description, setDescription, priority, setPriority }) => {
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