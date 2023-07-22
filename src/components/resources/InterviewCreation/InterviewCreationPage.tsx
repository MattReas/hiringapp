import React from "react"
import InterviewCreationForm from "./InterviewCreationForm"
import "./InterviewCreationPage.css"

function InterviewCreationPage() {
    return (
        <div className="interview-creation-page-container"> 
        <h3>Create Interview</h3> <br/>
        <InterviewCreationForm />
        </div>
    )
}

export default InterviewCreationPage