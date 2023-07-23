import React from "react"
import InterviewCreationForm from "./InterviewCreationForm"
import InterviewTemplateManager from "./InterviewTemplateManager"
import "./InterviewCreationPage.css"

function InterviewCreationPage() {
    return (
        <div className="interview-creation-page-container"> 
        <h3>Create Interview</h3> <br/>
        <InterviewCreationForm />
        <InterviewTemplateManager />
        </div>
    )
}

export default InterviewCreationPage