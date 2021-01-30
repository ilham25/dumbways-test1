import { useState } from "react";

import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import TopBar from "../components/TopBar";

import { login } from "../utils/auth";

function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    login({ email });
    history.push("/");
    clearForm();
  };

  return (
    <>
      <TopBar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
