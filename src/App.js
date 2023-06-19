
import ApplicantGrid from "./components/ApplicantGrid"
import './style/App.css';

function App() {
  const applicants = [
    {
    name: "Matt Reas",
    ePanther: "mreas",
    major: "Computer Science",
    grad: "Spring 2024",
    position: "HD1"
  }, {
    name: "Ben Reas",
    ePanther: "reas",
    major: "Computer Science",
    grad: "Fall 2025",
    position: "HD1"
  }
]
  return (
    <div className="App">
      <ApplicantGrid applicants={applicants}/>
    </div>
  );
}

export default App;
