import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Form, Button } from "react-bootstrap";

function PositionCreationForm() {
    const [positionTitle, setPositionTitle] = useState('')
    
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const data = { positionTitle }

        console.log(data)
        try {
            const response = await axios.post('http://localhost:3000/positions/', data)
        }catch (error: unknown) {
            if (error instanceof Error) {
            console.error("Failed to create new position", error.message)
            } else {
                console.log("Failed to create position", error)
            }
        }

    }
    return (
        <Form onSubmit={handleFormSubmit} className="position-creation-form">
            <Form.Group controlId="positionName">
                <Form.Label>Position Title</Form.Label>
                <Form.Control type="text" value={positionTitle} onChange={e => setPositionTitle(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Position
                </Button> 
        </Form>
    )
}

export default PositionCreationForm