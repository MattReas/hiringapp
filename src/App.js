
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicantGrid from "./components/ApplicantGrid";
import './style/App.css';
import FilterDropdown from "./components/FilterDropDown";
import NavigationBar from "./components/Navbar";
import ProfileCreationform from "./components/ProfileCreation";

function App() {
  const applicants = [
    {
    name: "Matt Reas", ePanther: "mreas", major: "Computer Science", grad: "Spring 2024", position: "HD1"
  }, {
    name: "Ben Reas", ePanther: "reas", major: "Computer Science", grad: "Fall 2025", position: "HD2"
  }
  ]

  const [filterPosition, setFilterPosition] = useState("");

  const filteredApplicants = filterPosition ? applicants.filter(applicant => applicant.position === filterPosition) : applicants
 
  const handleFilterChange = (newPosition) => {
    setFilterPosition(newPosition);
  }

  return (
    <div className="App">
      <NavigationBar/>
      <FilterDropdown onChange={handleFilterChange}/>
      <ApplicantGrid applicants={filteredApplicants}/>
      <ProfileCreationform/>
    </div>
  );
}

export default App;
