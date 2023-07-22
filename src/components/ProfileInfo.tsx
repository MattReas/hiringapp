import React from "react";

interface Applicant {
    firstName: string;
    lastName: string;
    ePanther: string;
    position: string;
    major: string;
    grad: string;
  }
  
  interface ProfileInfoProps {
    applicant: Applicant;
  }

function ProfileInfo({ applicant }: ProfileInfoProps) {
    return (
        <div>
            <h4>
                {" "}
                {applicant.firstName} {applicant.lastName}
            </h4>
            <p>
                ePanther: {applicant.ePanther}
                <br/>
                Position: {applicant.position}
                <br/>
                Graduation: {applicant.grad}
            </p>
        </div>
    )
}

export default ProfileInfo