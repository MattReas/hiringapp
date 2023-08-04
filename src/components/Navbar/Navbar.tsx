import React from "react";
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Navbar.css"

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Hiring Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create-profile">Profile Creation</Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                Resources
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown as={ButtonGroup} drop='end'>
                    <Dropdown.Toggle variant="Primary" id="dropdown-sub" className="custom-dropdown">
                      Interviews
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="custom-dropdown-menu">
                      <Dropdown.Item as={Link} to="/create-interviews">Create Interviews</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/edit-interviews">Edit Interviews</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
