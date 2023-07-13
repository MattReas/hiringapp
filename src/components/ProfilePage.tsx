import React from "react"
import { useLocation } from 'react-router-dom'
import ApplicantBox from "./ApplicantBox"

function ProfilePage() {
    const location = useLocation()
    const { applicant } = location.state
    
    return (
        <div>

        <h1>Profile</h1>
        <ApplicantBox applicant ={applicant}/>
        </div>
    )
}

export default ProfilePage