import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Container>
          <a className="pe-5 nav-logo" href="/">
            ThisHighSchool
          </a>
          <Navbar.Toggle aria-controls="navbar-school-sm" />
          <Navbar.Collapse id="navbar-school-sm">
            <Nav className="container justify-content-end text-center">
              <Nav.Link className="active" href="/">
                Welcome
              </Nav.Link>

              <Nav.Link href="/">About Us</Nav.Link>

              <Nav.Link href="/">Academics</Nav.Link>

              <Nav.Link href="/">Admissions</Nav.Link>

              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
