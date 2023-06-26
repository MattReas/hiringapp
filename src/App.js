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

function App() {
  const applicants = [
    {
      name: "Matt Reas",
      ePanther: "mreas",
      major: "Computer Science",
      grad: "Spring 2024",
      position: "HD1",
    },
    {
      name: "Ben Reas",
      ePanther: "reas",
      major: "Computer Science",
      grad: "Fall 2025",
      position: "HD2",
    },
  ];

  const [filterPosition, setFilterPosition] = useState("");

  const filteredApplicants = filterPosition
    ? applicants.filter((applicant) => applicant.position === filterPosition)
    : applicants;

  const handleFilterChange = (newPosition) => {
    setFilterPosition(newPosition);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<>
            <FilterDropdown onChange={handleFilterChange}/>
            <ApplicantGrid applicants={filteredApplicants}/>
          </>} />
          <Route path="create-profile" element={<ProfileCreationform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
