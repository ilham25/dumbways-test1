import { Col, Card, Button } from "react-bootstrap";

import api from "../utils/api";

export default function SchoolCard({
  name,
  level,
  id,
  logo,
  address,
  npsn,
  usId,
  handleShow,
}) {
  const apiDelete = async (dataId) => {
    const response = await api.delete(`/school/${dataId}`);
    const data = await response.data;
    if (data.status === 200) {
      alert("Input Data Sukses");
    }
  };

  const handleDelete = () => {
    const TOKEN_KEY = "temp_key";
    const userId = JSON.parse(localStorage.getItem(TOKEN_KEY)).userId;
    if (window.confirm("Are you sure wanto to delete?")) {
      if (usId === userId) {
        apiDelete(id);
      } else {
        alert("Can't delete school");
      }
    }
  };
  return (
    <Col md={3} className="mb-3">
      <Card>
        {/* <Card.Img
          variant="top"
          src={`https://picsum.photos/600?random=${id}`}
        /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <small>{npsn}</small>
          <Card.Text>{level}</Card.Text>
          <Card.Text>{address}</Card.Text>
          <Button variant="primary mr-1">Detail</Button>
          <Button variant="warning mr-1" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
