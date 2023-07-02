import React from "react";
import ApplicantBox from "./ApplicantBox.tsx";
import '../style/ApplicantGrid.css';

interface Applicant {
    firstName: string;
    lastName: string;
    position: string;
    major: string;
    grad: string;
    ePanther: string;
}

interface ApplicantGridProps {
    applicants: Applicant[]
}

function ApplicantGrid({applicants}: ApplicantGridProps) {
    return (
        <div className="applicant-grid">
            {applicants.map((applicant) => (
                <ApplicantBox key={applicant.ePanther} applicant={applicant} />
            ))}
        </div>
    )
}

export default ApplicantGrid
// function ApplicantGrid({applicants}) {
//     return (
//         <div className="applicant-grid">
//             {applicants.map((applicant) => (
//                 <ApplicantBox key={applicant.ePanther} applicant={applicant} />
//             ))}
//         </div>
//     );
// }

// export default ApplicantGrid