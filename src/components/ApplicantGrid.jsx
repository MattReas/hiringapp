import React from "react";
import ApplicantBox from "./ApplicantBox"
import '../style/ApplicantGrid.css'

function ApplicantGrid({applicants}) {
    return (
        <div className="applicant-grid">
            {applicants.map((applicant) => (
                <ApplicantBox key={applicant.ePanther} applicant={applicant} />
            ))}
        </div>
    )
}

export default ApplicantGrid