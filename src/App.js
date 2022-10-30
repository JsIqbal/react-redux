import { useEffect, useState, } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Table, Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    // const navigate = useNavigate();
    const [isCreateMode, setIsCreateMode] = useState(false);
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>



        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    <Container className='mt-2'>
    {
        isCreateMode && (
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>username</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Task Priority</Form.Label>
          <Form.Control as="select">
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </Form.Control>
        </Form.Group>
            <Button clasName="btn btn-primary" type="submit" >submit</Button>
          </Form>
        )
    }

                <div className='ms-auto col-lg-5 text-end'>
                    <div>
                    <button onClick={()=> setIsCreateMode(isCreateMode ? false : true)} className='text-align-right btn btn-primary'><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
        <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Edid/Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>High</td>
                <td>
                    <button className='btn btn-circle'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-circle'><i class="fa-solid fa-delete-left"></i></button>
                </td>
                </tr>
            </tbody>
        </Table>
    </Container>
    </>
  );
}

export default App;