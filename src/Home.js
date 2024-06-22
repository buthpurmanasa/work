import React from 'react';
import './App.css';
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='image'>
      <Navbar style={{backgroundColor:"lightsteelblue"}} variant="dark" expand="lg">
        <Container  >
          <Navbar.Brand href="#home" className='text-dark'>Career Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
              <Nav.Link href="#about" className='text-dark' >About</Nav.Link>
              <Nav.Link href="#services" className='text-dark'>Services</Nav.Link>
              <Nav.Link href="#contact" className='text-dark'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4" >
        <h1 className='text-dark'><b>Welcome to the Career Portal</b></h1>
        <p>This is the home page of the career portal. You can find information about our services, contact details.</p>
        
        <h2 className="mt-5 ">Featured Jobs</h2>
        <Row>
          <Col md={4} className=''>
            <Card className="card mb-4 shadow bg-light">
              <Card.Body>
                <Card.Title>Software Engineer</Card.Title>
                <Card.Text>
                  Company: Tech Solutions
                </Card.Text>
                <Card.Text>
                  Location: New York, NY
                </Card.Text>
                <Button variant="dark">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow bg-light">
              <Card.Body>
                <Card.Title>Data Analyst</Card.Title>
                <Card.Text>
                  Company: Data Corp
                </Card.Text>
                <Card.Text>
                  Location: San Francisco, CA
                </Card.Text>
                <Button variant="dark">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow bg-light">
              <Card.Body>
                <Card.Title>Product Manager</Card.Title>
                <Card.Text>
                  Company: Innovatech
                </Card.Text>
                <Card.Text>
                  Location: Boston, MA
                </Card.Text>
                <Button variant="dark">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-5">Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 bg-light">
              <Card.Body>
                <Card.Text>
                  "The Career Portal helped me find my dream job in no time!"
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- John Doe</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 bg-light">
              <Card.Body>
                <Card.Text>
                  "Great platform with amazing support and resources!Amazing."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- Jane Smith</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 bg-light">
              <Card.Body>
                <Card.Text>
                  "I highly recommend this portal to anyone looking for a job."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- Mike Johnson</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
