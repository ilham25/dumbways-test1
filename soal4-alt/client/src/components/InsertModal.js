import { useState } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import api from "../utils/api";

export default function InsertModal({ show, handleClose, update }) {
  const [name, setName] = useState("");
  const [npsn, setNpsn] = useState("");
  const [address, setAddress] = useState("");
  const [level, setLevel] = useState("");

  const handleInsert = async (insertData) => {
    const response = await api.post("/school", insertData);
    const data = await response.data;
    if (data.status === 200) {
      alert("Input Data Sukses");
      update();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, npsn, address, level });
    const TOKEN_KEY = "temp_key";
    const userId = JSON.parse(localStorage.getItem(TOKEN_KEY)).userId;
    handleInsert({ name, npsn, address, level, userId });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add School</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter School Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>NPSN</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter NPSN"
              value={npsn}
              onChange={(e) => {
                setNpsn(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Level"
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
              }}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
