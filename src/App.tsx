// imports that are not components
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//css
import "./style/App.css";
// Components
import ApplicantGrid from "./components/ApplicantGrid";
import FilterDropdown from "./components/FilterDropDown";
import NavigationBar from "./components/Navbar";
import ProfileCreationform from "./components/ProfileCreation";
import ProfilePage from "./components/ProfilePage"

interface Applicant {
  firstName: string;
  lastName: string;
  ePanther: string;
  major: string;
  grad: string;
  position: string;
}

function App() {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  const [filterPosition, setFilterPosition] = useState<string>("");

  useEffect(() => {
    async function fetchApplicants() {
      const response = await axios.get('http://localhost:3000/applicantProfiles')
      return response.data
    }
  
    fetchApplicants().then(setApplicants)
  }, [])

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
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
