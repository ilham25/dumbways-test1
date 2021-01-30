import { useState } from "react";

import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import TopBar from "../components/TopBar";

import api from "../utils/api";

import { login } from "../utils/auth";

function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (loginData) => {
    const { email, password } = loginData;
    const response = await api.post("/login", { email, password });
    const data = response.data;

    if (data.status === 200) {
      login({ email, userId: data.id });
      history.push("/");
      clearForm();
    } else {
      alert("Wrong email or password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    handleLogin({ email, password });
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
