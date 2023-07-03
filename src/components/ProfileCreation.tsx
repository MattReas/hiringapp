import React, { FormEvent, useState } from "react";
import axios from 'axios'
import "../style/ProfileCreation.css"
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PositionSelect from "./PositionSelect";
import GraduationDateSelector from "./GraduationDateSelector";


function ProfileCreationform() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [ePanther, setEPanther] = useState("")
  const [major, setMajor] = useState("")
  const [grad, setGrad] = useState("")
  const [position, setPosition] = useState("")
  const [semester, setSemester] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const profileData = {
      firstName,
      lastName,
      ePanther,
      major,
      grad: `${semester} ${year}`,
      position,
    }
    try {
      const response = await axios.post('http://localhost:3000/applicantProfiles', profileData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="profileCreationForm">
        <h1 className="profileCreationTitle">
            Applicant Profile Creation</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="ePanther"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="ePanther" value={ePanther} onChange={e => setEPanther(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="4">
            <PositionSelect onPositionChange={setPosition} />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <GraduationDateSelector onSemesterChange={setSemester} onYearChange={setYear} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default ProfileCreationform;
