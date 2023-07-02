import React, { useState } from "react";
import "../style/ProfileCreation.css"
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import PositionSelect from "./PositionSelect";
import GraduationDateSelector from "./GraduationDateSelector";


function ProfileCreationform() {

  return (
    <div className="profileCreationForm">
        <h1 className="profileCreationTitle">
            Applicant Profile Creation</h1>
      <Form>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="First Name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="Last Name" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <FloatingLabel
              controlId="floatingInput"
              label="ePanther"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="ePanther" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="4">
            <PositionSelect />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <GraduationDateSelector />
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
