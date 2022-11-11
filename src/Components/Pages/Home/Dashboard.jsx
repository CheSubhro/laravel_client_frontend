import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Dashboard = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        {/* <Navbar.Brand href="/">Dashboard</Navbar.Brand> */}
        {/* <Nav className="me-auto">
          <Nav.Link href="/">Gallery</Nav.Link>
        </Nav> */}
        <Nav className="me-auto">Dashboard</Nav>
      </Container>
    </Navbar>
  )
}

export default Dashboard