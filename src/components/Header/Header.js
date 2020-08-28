import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="w-25"><img className="w-75" src={logo} alt=""/> </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Friends</Nav.Link>
                    <Nav.Link href="#">Community</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Members" className="mr-sm-2" />
                </Form>
            </Navbar>
            <h2>Welcome to Friend List</h2>
        </div>
    );
};

export default Header;