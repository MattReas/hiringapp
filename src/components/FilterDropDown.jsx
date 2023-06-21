import React from "react"

function FilterDropdown({ onChange }) {
    return(
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="">All Positions</option>
            <option value="HD1">HD1</option>
            <option value="HD2">HD2</option>
            <option value="Classroom Tech">Classroom Tech</option>
            <option value="Desktop Suppport">Desktop Support</option>
        </select>
    )
}
export default FilterDropdown