import React, { useState, ChangeEvent } from "react";
import Form from "react-bootstrap/esm/Form";

function PositionSelect() {
    const [position, setPosition] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setPosition(event.target.value)
    } 

    return (
        <Form.Select aria-label="Position select" value={position} onChange={handleChange}>
            <option>Select Position</option>
            <option value="HD1">HD1</option>
            <option value="HD2">HD2</option>
            <option value="Classroom Tech">Classroom Tech</option>
            <option value="Desktop Support">Desktop Support</option>
        </Form.Select>
    )
}

export default PositionSelect