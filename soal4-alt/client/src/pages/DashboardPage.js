import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

import TopBar from "../components/TopBar";

export default function DashboardPage() {
  return (
    <>
      <TopBar>
        <Button className="btn btn-primary">Add School</Button>
      </TopBar>

      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/150" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
