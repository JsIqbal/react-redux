import React, { useEffect, useState, } from 'react';
import { Table, Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import Layout from './components/layout/Layout';

import { string, object } from "yup";

export const loginSchema = object().shape({
    email: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long."),
    password: string()
        .required("This field must not be empty")
        .min(2, "This field minimum 2 character long.")
        .max(25,"This field minimum 25 character long."),
});

function App() {
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [tasks, setTasks] = useState([]);

    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState();
    // const [isAdded, setIsAdded] = useState(false);

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

        // console.log("title : >>", title);
        // console.log("description : >>", description);
        // console.log("priority : >>", priority);

        const taskItem = {
            id: 100,
            email: email,
            description: description,
            priority: priority
        }
        const taskData = tasks;
        taskData.push(taskItem);
        setTasks(taskData);
        setEmail('');
        setDescription('');
        setPriority("");
        // console.log(taskItem);

        // console.log("TaskData: >>", taskData);
        // console.log("tasks: >>", tasks);
    }


  return (
    <>
        <Layout>
            <Container className='mt-2'>
                {
                    isCreateMode && (
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
                    )
                }

                <div className='ms-auto col-lg-5 text-end'>
                    <div>
                        <button 
                            onClick={()=> setIsCreateMode(isCreateMode ? false : true)} 
                            className='text-align-right btn btn-primary'
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>

                <Table striped bordered hover className='mt-4'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.description}</td>
                                    <td>{item.priority}</td>
                                    <td>
                                        <button className='btn btn-circle'><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className='btn btn-circle'><i className="fa-solid fa-delete-left"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </Layout>
    </>
  );
}

export default App;