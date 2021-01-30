import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function TopBar({ children }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div className="d-flex gap-3">
            {children}
            {/* <Button variant="outline-success">Login</Button>
            <Button variant="outline-success ml-2">oawk</Button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
