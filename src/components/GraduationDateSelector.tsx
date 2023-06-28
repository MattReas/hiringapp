import React, { useState } from "react";
import Form  from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

function GraduationDateSelector() {
    const [semester, setSemester] = useState<string>('')
    const [year, setYear] = useState<string>('')

    const currentYear = new Date().getFullYear()
    const years = Array.from({length: 5}, (_,i) => currentYear+ i)

    return (
    <Form>
        <Row>
        <Form.Group as={Col} md="6" controlId="semesterSelect">
        
            <Form.Select value={semester} onChange={(e) => setSemester(e.target.value)}>
                <option value='' disabled>Select Semester</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="yearSelect">
            
            <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value='' disabled>Select Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
            </Form.Select>
        </Form.Group>
        </Row>
    </Form>
    )
}

export default GraduationDateSelector