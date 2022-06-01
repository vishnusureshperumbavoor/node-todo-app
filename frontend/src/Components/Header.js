import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none" }} to="/">
              MERN NOTES
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/mynotes">
                  My Notes
                </Link>
              </Nav.Link>
              <NavDropdown title="Vishnu Suresh" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
