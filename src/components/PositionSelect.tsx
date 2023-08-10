import React, { useState, ChangeEvent } from "react";
import Form from "react-bootstrap/esm/Form";

interface PositionSelectProps {
    onPositionChange: (position: string) => void
    positionTitles: string[]
}

function PositionSelect({ onPositionChange, positionTitles }: PositionSelectProps) {
    const [position, setPosition] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newPosition = event.target.value
        setPosition(newPosition)
        onPositionChange(newPosition)
    } 

    return (
        <Form.Select aria-label="Position select" value={position} onChange={handleChange}>
            <option>Select Position</option>
            {positionTitles.map(title => (
                <option key={title} value={title}>{title}</option>
            ))}
        </Form.Select>
    )
}

export default PositionSelect