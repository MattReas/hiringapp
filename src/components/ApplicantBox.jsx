import React, { useState} from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function ApplicantBox({applicant}) {
    const [key, setKey] = useState("#first")
    const [interviewDate, setInterviewDate] = useState(new Date())
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Nav.Item>
                        <Nav.Link eventKey="#first">Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#interview">Interview</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {key === "#first" &&
                <>
                <Card.Title>{applicant.name}: {applicant.ePanther}</Card.Title>
                <Card.Text>
                    Position: {applicant.position}<br/>
                    Major: {applicant.major}<br/>
                    Graduation: {applicant.grad}<br/>
                </Card.Text>
                </>}
                {key === "#interview" &&
                <>
                <Card.Title>Interview Date</Card.Title>
                <Card.Text>
                    <DatePicker selected={interviewDate} onChange={date => setInterviewDate(date)} />
                </Card.Text>
                </>}
            </Card.Body>
        </Card>
    )


}
export default ApplicantBox;