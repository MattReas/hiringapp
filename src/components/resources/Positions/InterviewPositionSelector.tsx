import React, { useState, useEffect } from 'react'
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import './InterviewPositionSelector.css'
interface InterviewPostionSelectorProps {
    onPositionChange: (position: string) => void
    selectedPositions: string[]

}

function InterviewPostionSelector({ onPositionChange, selectedPositions }: InterviewPostionSelectorProps) {
    const [positionTitles, setPositionTitles] = useState<string[]>([])
    const [search, setSearch] = useState("")
    const [filteredOptions, setFilteredOptions] = useState<string[]>([])


    useEffect(() => {
        const fetchPositions = async () => {
          try {
            const positionsResponse = await axios.get('http://localhost:3000/positions/')
    
            const titles = positionsResponse.data.map((item: {positionTitle: string }) => item.positionTitle)
            setPositionTitles(titles)
            setFilteredOptions(titles) 
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.error("Failed to fetch positions", error.message)
            } else {
              console.log("Failed to fetch positions", error)
            }
          }
        }
        fetchPositions()
      }, [])

      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (e.target.value) {
            const filtered = positionTitles.filter(option => option.toLowerCase().includes(e.target.value.toLowerCase()));
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(positionTitles);
        }
    };

    const isSelected = (position: string) => selectedPositions.includes(position)

      return(
        <div>
          <Form.Control
            type='text'
            placeholder='Search'
            value={search}
            onChange={handleSearchChange}
            />
            <div className="dropdown-container">
              {filteredOptions.map((option, index) => (
                <Dropdown.Item key={index} 
                onClick={() => onPositionChange(option)}
                className={isSelected(option) ? "selected-dropdown-item" : ""}>
                  {option}
                </Dropdown.Item>
              ))}
            </div>
        </div>
      )
}

export default InterviewPostionSelector