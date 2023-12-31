import React from "react"
import { Dropdown } from 'react-bootstrap'

interface FilterDropdownProps {
    onChange: (e: string | null) => void
}


function FilterDropdown({ onChange }: FilterDropdownProps) {
    const handleSelect = (e: string | null) => {
        onChange(e)
    }

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Position
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="">All Positions</Dropdown.Item>
                <Dropdown.Item eventKey="HD1">HD1</Dropdown.Item>
                <Dropdown.Item eventKey="HD2">HD2</Dropdown.Item>
                <Dropdown.Item eventKey="Classroom Tech">Classroom Tech</Dropdown.Item>
                <Dropdown.Item eventKey="Desktop Support">Desktop Support</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default FilterDropdown