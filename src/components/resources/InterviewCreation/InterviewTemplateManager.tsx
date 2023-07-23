import React, { useState, useEffect } from "react"
import axios from "axios"
import InterviewEditForm from "./InterviewEditForm"
interface Template {
    id: string;
    templateName: string;
    
  }


function InterviewTemplateManager() {
    const [templates, setTemplates] = useState<Template[]>([])
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.get('http://localhost:3000/interview-template')
                setTemplates(response.data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error("Failed to fetch interview templates", error.message)
                } else {
                    console.log("Failed to fetch interview templates:", error)
                }
            }
        }
        fetchTemplates()
    }, [])

    const handleEdit = (template: any) => {
        setSelectedTemplate(template)
    }

    return (
        <div className="interview-template-manager">
            {selectedTemplate ? (
                <InterviewEditForm templateId={selectedTemplate.id} />
            ): (
                <ul>
                    {templates.map((template) => (
                       <li key={template.id}>
                       {template.templateName}
                        <button onClick={() => handleEdit(template)}>Edit</button>
                        </li>
                       
                    ))}
                     </ul>
                ) 
            }
        </div>
    )
}

export default InterviewTemplateManager
