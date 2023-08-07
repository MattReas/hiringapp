import React, { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


interface Template {
    id: number;
    templateName: string;
}

function InterviewSelector() {
    const [templateDict, setTemplateDict] = useState<Record<number, string>>({})

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const templateNameResponse = await axios.get('http://localhost:3000/interview-template')
                
                const templates: Template[] = templateNameResponse.data
                
                const templateDictionary = templates.reduce<Record<number, string>>((acc, current) => {
                    acc[current.id] = current.templateName
                    return acc
                },
                {} as Record<number, string>
                )

                setTemplateDict(templateDictionary)
            } catch (error) {
                console.error("Error fetching templates", error)
            }
        }

        fetchTemplate()
    }, [])

    return (
        <div>
            <Form.Select>
                {Object.entries(templateDict).map(([id, name]) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </Form.Select>
        </div>
    )
}

export default InterviewSelector