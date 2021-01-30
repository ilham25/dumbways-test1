import { Col, Card, Button } from "react-bootstrap";

export default function SchoolCard({ name, level, id, logo, address, npsn }) {
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={`https://picsum.photos/600?random=${id}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{level}</Card.Text>
          <Button variant="primary">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
