import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface Applicant {
    name: string;
    position: string;
    major: string;
    grad: string;
}

interface ApplicantBoxProps {
    applicant: Applicant;
}

function ApplicantBox({applicant}: ApplicantBoxProps) {
    const [key, setKey] = useState<string>("#first")
    const [interviewDate, setInterviewDate] = useState<Date>(new Date())
    return (
        <Card>
            <Card.Header> {applicant.name}
                <Nav variant="tabs" activeKey={key} onSelect={(k: string | null) => k && setKey(k)}>
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
                <Card.Title></Card.Title>
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
                <DatePicker
                    selected={interviewDate}
                    onChange={(date: Date) => setInterviewDate(date)}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="Pp"
                />

                </Card.Text>
                </>}
            </Card.Body>
        </Card>
    )
}

export default ApplicantBox;