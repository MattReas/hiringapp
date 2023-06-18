import React from "react"; 

function ApplicantBox({applicant}) {
    return(
        <div className="applicant-box">
            <h2>{applicant.name}</h2>
            <p>ePanther: {applicant.ePanther}</p>
            <p>Major: {applicant.major} Graduation Date: {applicant.grad}</p>
            <p></p>
        </div>
    )
}
export default ApplicantBox;