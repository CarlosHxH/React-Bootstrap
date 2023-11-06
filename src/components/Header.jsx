import React from 'react';
import Icons from './components/Icons';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={''}>
      <Navbar bg="primary" variant="dark">
        <Button
          onClick={toggleSidebar}
          className="d-sm-none toggle-button mx-2 btn-sm"
        >
          <Icons.Menu />
        </Button>

        <Navbar.Brand className={'mx-2'}>Dashboard</Navbar.Brand>

        <Nav className="ml-auto">
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Username</NavDropdown.Item>
            <NavDropdown.Item href="#">Email</NavDropdown.Item>
            <NavDropdown.Item href="#">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </header>
  );
};
export default Header;
