import ApplicantBox from "./components/ApplicantBox"
import './style/App.css';

function App() {
  const applicant = {
    name: "Matt Reas",
    ePanther: "mreas",
    major: "Computer Science",
    grad: "Spring 2024",
  }
  return (
    <div className="App">
      <header className="App-header">
        Hiring Manager Application
      </header>

      <ApplicantBox applicant={applicant}/>
    </div>
  );
}

export default App;
