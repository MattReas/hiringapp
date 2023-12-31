import React from "react"
import InterviewCreationForm from "./InterviewCreationForm"
import "./InterviewCreationPage.css"
import PositionCreationForm from "../Positions/PositionCreation/PositionCreatonForm"
import InterviewPostionSelector from "../Positions/InterviewPositionSelector"

function InterviewCreationPage() {
    return (
        <div className="interview-creation-page-container"> 
        <h3>Create Interview</h3> <br/>
        <InterviewCreationForm />
        <PositionCreationForm />
        </div>
    )
}

export default InterviewCreationPage