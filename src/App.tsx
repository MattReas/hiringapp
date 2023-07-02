// imports that are not components
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//css
import "./style/App.css";
// Components
import ApplicantGrid from "./components/ApplicantGrid";
import FilterDropdown from "./components/FilterDropDown";
import NavigationBar from "./components/Navbar";
import ProfileCreationform from "./components/ProfileCreation";

interface Applicant {
  firstName: string;
  lastName: string;
  ePanther: string;
  major: string;
  grad: string;
  position: string;
}

function App() {
  const applicants: Applicant[] = [
    {
      firstName: "Matt",
      lastName: "Reas",
      ePanther: "mreas",
      major: "Computer Science",
      grad: "Spring 2024",
      position: "HD1",
    },
    {
      firstName: "Ben",
      lastName: "Reas",
      ePanther: "reas",
      major: "Computer Science",
      grad: "Fall 2025",
      position: "HD2",
    },
    {
      firstName: "Ryan",
      lastName: " Tarpey",
      ePanther: "rjtarpey",
      major: "Geology",
      grad: "Spring 2026",
      position: "Classroom Tech",
    },
    {
      firstName: "Quinn",
      lastName: " Tarpey",
      ePanther: "qtarpey",
      major: "Army",
      grad: "Fall 2024",
      position: "HD1",
    },
  ];

  const [filterPosition, setFilterPosition] = useState<string>("");

  const filteredApplicants = filterPosition
    ? applicants.filter((applicant) => applicant.position === filterPosition)
    : applicants;

  const handleFilterChange = (newPosition: string | null): void => {
    if (newPosition) {
      setFilterPosition(newPosition);
    }
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterDropdown onChange={handleFilterChange} />
                <ApplicantGrid applicants={filteredApplicants} />
              </>
            }
          />
          <Route path="create-profile" element={<ProfileCreationform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
