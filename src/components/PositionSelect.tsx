import React, { useState, ChangeEvent } from "react";
import Form from "react-bootstrap/esm/Form";

interface PositionSelectProps {
    onPositionChange: (position: string) => void
}

function PositionSelect({ onPositionChange }: PositionSelectProps) {
    const [position, setPosition] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newPosition = event.target.value
        setPosition(newPosition)
        onPositionChange(newPosition)
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