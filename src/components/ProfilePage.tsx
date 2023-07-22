import React from "react"
import { useLocation } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import ProfileInfo from "./ProfileInfo"
import "../style/ProfilePage.css"
function ProfilePage() {
    const location = useLocation()
    const { applicant } = location.state
    
    return (
        <div>

        <h1>Profile</h1>
        <Card className="profileCard">
            <ProfileInfo applicant={applicant}/>
            </Card>
        </div>
    )
}

export default ProfilePage