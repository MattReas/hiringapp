import React, { useState, ChangeEvent } from "react";
import Form  from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

interface GraduationDateSelectorProps {
    onSemesterChange: (semester: string) => void
    onYearChange: (year: string) => void
}

function GraduationDateSelector({ onSemesterChange, onYearChange}: GraduationDateSelectorProps) {
    const [semester, setSemester] = useState<string>('')
    const [year, setYear] = useState<string>('')

    const currentYear = new Date().getFullYear()
    const years = Array.from({length: 5}, (_,i) => currentYear+ i)

    const handleSemesterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newSemester = event.target.value
        setSemester(newSemester)
        onSemesterChange(newSemester)
    }
    const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newYear = event.target.value
        setYear(newYear)
        onYearChange(newYear)
    }

    return (
    
        <Row>
        <Form.Group as={Col} md="6" controlId="semesterSelect">
        
            <Form.Select value={semester} onChange={handleSemesterChange}>
                <option value='' disabled>Select Semester</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="yearSelect">
            
            <Form.Select value={year} onChange={handleYearChange}>
                <option value='' disabled>Select Year</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
            </Form.Select>
        </Form.Group>
        </Row>
    
    )
}

export default GraduationDateSelector