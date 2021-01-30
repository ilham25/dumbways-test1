import { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";

import { logout } from "../utils/auth";
import api from "../utils/api";

import TopBar from "../components/TopBar";
import SchoolCard from "../components/SchoolCard";
import InsertModal from "../components/InsertModal";
import UpdateModal from "../components/UpdateModal";

export default function DashboardPage({ history }) {
  const [schools, setSchools] = useState([]);

  const getSchoolData = async () => {
    const response = await api.get("/");
    const data = await response.data;
    setSchools(data);
  };

  // Insert Modal Handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Update Modal Handler
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(false);

  useEffect(() => {
    getSchoolData();
  }, []);

  return (
    <>
      <TopBar>
        <Button variant="primary" onClick={handleShow}>
          Add School
        </Button>
        <Button
          className="ml-2"
          variant="success"
          onClick={() => {
            logout();
            if (window.confirm("Logout?")) {
              history.push("/login");
            }
          }}
        >
          Logout
        </Button>
      </TopBar>

      <Container className="mt-5">
        <Row>
          {schools.map((school) => (
            <SchoolCard
              key={school.id}
              id={school.id}
              name={school.name_school}
              npsn={school.npsn}
              address={school.address}
              logo={school.logo_school}
              level={school.school_level}
              usId={school.user_id}
              handleShow={handleEditShow}
            />
          ))}
        </Row>
      </Container>

      <InsertModal
        show={editShow}
        handleClose={handleEditClose}
        update={getSchoolData}
      />
      <InsertModal show={show} handleClose={handleClose} />
    </>
  );
}
