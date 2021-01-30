import { useState, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap";
import api from "../utils/api";

export default function UpdateModal({ show, handleClose, schId, update }) {
  const [name, setName] = useState("");
  const [npsn, setNpsn] = useState("");
  const [address, setAddress] = useState("");
  const [level, setLevel] = useState("");

  const handleUpdate = async (insertData) => {
    const response = await api.put("/school", insertData);
    const data = await response.data;
    if (data.status === 200) {
      alert("Edit Data Sukses");
      update();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, npsn, address, level });
    const TOKEN_KEY = "temp_key";
    const userId = JSON.parse(localStorage.getItem(TOKEN_KEY)).userId;
    handleUpdate({ name, npsn, address, level, schId });
    handleClose();
  };

  const getData = async () => {
    const response = await api.get(`/school/${schId}`);
    const data = await response.data;
    try {
      const { name_school, npsn, address, school_level } = data.data;
      setName(name_school);
      setNpsn(npsn);
      setAddress(address);
      setLevel(school_level);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [show]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit School</Modal.Title>
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
              maxLength="10"
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
            <Form.Label>Level</Form.Label>
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
          {/* <Button variant="secondary" onClick={cek}>
            cek
          </Button> */}
          <Button variant="warning" type="submit">
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
