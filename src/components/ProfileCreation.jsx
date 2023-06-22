import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import PositionSelect from "./PositionSelect";
import GraduationDateSelector from "./GraduationDateSelector"

function ProfileCreationform() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} md="3">
                    <FloatingLabel 
                    controlId="floatingInput" 
                    label="First Name"
                    className="mb-3"
                    >
                        <Form.Control 
                        required 
                        type = "text"
                        placeholder="First Name"
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                    >
                        <Form.Control
                        required
                        type = "text"
                        placeholder="Last Name"
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <FloatingLabel
                    controlId="floatingInput"
                    label="ePanther"
                    className="mb-3"
                    >
                        <Form.Control
                        required
                        type = "text"
                        placeholder="ePanther"
                        />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3">
                <PositionSelect/>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <GraduationDateSelector/>
                </Form.Group>
            </Row>
        </Form>
    )
}
export default ProfileCreationform