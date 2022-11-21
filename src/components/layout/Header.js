import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Counter from '../counter/counter.component';

const Header = (props) => {
    const tasks = useSelector(state => state.tableSlice.tasks)
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/detail'>
                            Task List
                            <span style={{color: "red"}} className='badge badge-danger'>{tasks.length}</span>
                        </Link>
                        <Link className='nav-link' to='/about'>About us</Link>
                        <Link className='nav-link'>{Counter()}</Link>
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
    );
}

export default Header;